#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const MEALS_DIR = path.join(__dirname, '../meals');
const VALID_MEAL_TYPES = ['desayuno', 'almuerzo', 'cena'];
const REQUIRED_FIELDS = ['date', 'user', 'meals'];
const REQUIRED_MEAL_FIELDS = ['type', 'time', 'description', 'image'];

let errors = [];
let warnings = [];
let validFiles = 0;

/**
 * Valida la estructura de un archivo meal.json
 */
function validateMealFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    // Validar campos requeridos
    for (const field of REQUIRED_FIELDS) {
      if (!data[field]) {
        errors.push(`${filePath}: Falta el campo requerido "${field}"`);
        return;
      }
    }

    // Validar formato de fecha (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
      errors.push(`${filePath}: Fecha inválida "${data.date}". Formato esperado: YYYY-MM-DD`);
      return;
    }

    // Validar que date sea válida
    const dateObj = new Date(data.date + 'T00:00:00');
    if (isNaN(dateObj.getTime())) {
      errors.push(`${filePath}: La fecha "${data.date}" no es válida`);
      return;
    }

    // Validar usuario
    if (typeof data.user !== 'string' || data.user.trim().length === 0) {
      errors.push(`${filePath}: El campo "user" debe ser un texto no vacío`);
      return;
    }

    // Validar array de comidas
    if (!Array.isArray(data.meals) || data.meals.length === 0) {
      errors.push(`${filePath}: "meals" debe ser un array no vacío`);
      return;
    }

    if (data.meals.length > 3) {
      errors.push(`${filePath}: No puede haber más de 3 comidas por día`);
      return;
    }

    const mealTypes = new Set();

    // Validar cada comida
    for (let i = 0; i < data.meals.length; i++) {
      const meal = data.meals[i];

      // Validar campos requeridos
      for (const field of REQUIRED_MEAL_FIELDS) {
        if (!meal[field]) {
          errors.push(`${filePath}: Comida ${i + 1} falta el campo "${field}"`);
          return;
        }
      }

      // Validar tipo de comida
      if (!VALID_MEAL_TYPES.includes(meal.type)) {
        errors.push(
          `${filePath}: Tipo de comida inválido "${meal.type}". Debe ser: ${VALID_MEAL_TYPES.join(', ')}`
        );
        return;
      }

      // Validar que no haya duplicados
      if (mealTypes.has(meal.type)) {
        errors.push(`${filePath}: No puede haber dos "${meal.type}" en el mismo día`);
        return;
      }
      mealTypes.add(meal.type);

      // Validar formato de hora (HH:MM)
      if (!/^\d{2}:\d{2}$/.test(meal.time)) {
        errors.push(
          `${filePath}: Hora inválida "${meal.time}" en comida ${i + 1}. Formato esperado: HH:MM`
        );
        return;
      }

      // Validar descripción
      if (typeof meal.description !== 'string' || meal.description.trim().length < 10) {
        errors.push(
          `${filePath}: La descripción de la comida ${i + 1} debe tener al menos 10 caracteres`
        );
        return;
      }

      // Validar imagen
      if (typeof meal.image !== 'string' || !meal.image.trim()) {
        errors.push(`${filePath}: Comida ${i + 1} debe tener un nombre de imagen`);
        return;
      }

      // Validar que la imagen existe
      const imagePath = path.join(path.dirname(filePath), meal.image);
      if (!fs.existsSync(imagePath)) {
        errors.push(`${filePath}: Imagen no encontrada: ${meal.image}`);
        return;
      }

      // Validar que sea una imagen
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const ext = path.extname(meal.image).toLowerCase();
      if (!validExtensions.includes(ext)) {
        errors.push(
          `${filePath}: Imagen ${meal.image} tiene extensión no válida. Debe ser: ${validExtensions.join(', ')}`
        );
        return;
      }

      // Validar tamaño de imagen (máx 5MB)
      const stats = fs.statSync(imagePath);
      if (stats.size > 5 * 1024 * 1024) {
        warnings.push(`${filePath}: Imagen ${meal.image} es muy grande (${(stats.size / 1024 / 1024).toFixed(2)}MB). Máximo recomendado: 5MB`);
      }
    }

    // Validar que haya al menos desayuno y cena
    if (!mealTypes.has('desayuno') || !mealTypes.has('almuerzo') || !mealTypes.has('cena')) {
      errors.push(`${filePath}: Debe haber desayuno, almuerzo y cena`);
      return;
    }

    validFiles++;
    console.log(`✅ ${filePath} es válido`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      errors.push(`${filePath}: JSON inválido - ${error.message}`);
    } else {
      errors.push(`${filePath}: Error leyendo archivo - ${error.message}`);
    }
  }
}

/**
 * Busca todos los archivos meal.json recursivamente
 */
function findMealFiles(dir) {
  const files = [];

  try {
    if (!fs.existsSync(dir)) {
      console.log('📁 Directorio de comidas no existe aún');
      return files;
    }

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        // Recursivamente buscar en subdirectorios
        files.push(...findMealFiles(fullPath));
      } else if (item.name === 'meal.json') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error leyendo directorio: ${error.message}`);
  }

  return files;
}

/**
 * Función principal
 */
function main() {
  console.log('🥗 Validando comidas...\n');

  const mealFiles = findMealFiles(MEALS_DIR);

  if (mealFiles.length === 0) {
    console.log('⚠️  No hay comidas para validar');
    process.exit(0);
  }

  console.log(`Encontradas ${mealFiles.length} comida(s)\n`);

  // Validar cada archivo
  for (const file of mealFiles) {
    validateMealFile(file);
  }

  // Reporte final
  console.log('\n' + '='.repeat(50));
  console.log('REPORTE DE VALIDACIÓN');
  console.log('='.repeat(50));

  if (warnings.length > 0) {
    console.log('\n⚠️  ADVERTENCIAS:');
    warnings.forEach(w => console.log(`  • ${w}`));
  }

  if (errors.length === 0) {
    console.log(`\n✅ Validación exitosa: ${validFiles} archivo(s) correcto(s)`);
    process.exit(0);
  } else {
    console.log('\n❌ ERRORES:');
    errors.forEach(e => console.log(`  • ${e}`));
    console.log(`\n❌ Validación fallida: ${errors.length} error(es)`);
    process.exit(1);
  }
}

main();
