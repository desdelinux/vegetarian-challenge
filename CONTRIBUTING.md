# 📝 Cómo Randall Sube Su Reto Diario

> ¡Hola Randall! Aquí está la guía paso a paso para que subas tu evidencia diaria. No te preocupes, es más fácil de lo que parece. 💪

---

## 🎯 El Objetivo

Cada día, Randall debe subir **evidencia fotográfica** de sus 3 comidas vegetarianas:
- 🥐 Desayuno
- 🍱 Almuerzo
- 🍽️ Cena

Y todo debe ser verificado por **máquinas implacables**. No hay forma de hacer trampa. 🤖

---

## 📋 Requisitos

- Git instalado en tu compu
- 📸 Cámara (o celular... claramente)
- 💪 Determinación

---

## 🚀 Paso a Paso (Léelo bien, Randall)

### 1️⃣ Clona el repositorio

La primera vez (solo una vez):

```bash
git clone https://github.com/desdelinux/vegetarian-challenge.git
cd vegetarian-challenge
```

---

### 2️⃣ Crea una rama para el día

Cada día, crea una rama con la fecha:

```bash
git checkout -b comida/2025-11-12
```

> **Nota:** Reemplaza `2025-11-12` con la fecha de hoy (formato `YYYY-MM-DD`)

---

### 3️⃣ Prepara la carpeta del día

```bash
mkdir -p meals/2025-11-12
cd meals/2025-11-12
```

---

### 4️⃣ Copia tus fotos

Copia las 3 fotos de tus comidas a esta carpeta **con estos nombres exactos**:

```
meals/2025-11-12/
├── desayuno.jpg     ← Foto del desayuno
├── almuerzo.jpg     ← Foto del almuerzo
└── cena.jpg         ← Foto de la cena
```

**Importante:**
- ✅ Nombres exactos (minúsculas, sin espacios)
- ✅ Formatos: JPG, PNG, GIF, WebP
- ✅ Máximo 5MB por imagen
- ✅ Que se vea que es COMIDA, no cuadros de arte 📸

---

### 5️⃣ Crea el archivo `meal.json`

En la carpeta `meals/2025-11-12/`, crea un archivo llamado `meal.json`:

```json
{
  "date": "2025-11-12",
  "user": "Randall",
  "meals": [
    {
      "type": "desayuno",
      "time": "07:30",
      "description": "Omelette vegetariano con champiñones, cebolla y tomate. Pan integral.",
      "image": "desayuno.jpg"
    },
    {
      "type": "almuerzo",
      "time": "12:45",
      "description": "Ensalada fresca con lechuga, tomate, pepino, zanahoria y aderezo.",
      "image": "almuerzo.jpg"
    },
    {
      "type": "cena",
      "time": "19:00",
      "description": "Pasta integral con salsa de tomate casera y verduras salteadas.",
      "image": "cena.jpg"
    }
  ]
}
```

**Campos obligatorios:**

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `date` | Fecha en YYYY-MM-DD | `"2025-11-12"` |
| `user` | Tu nombre | `"Randall"` |
| `type` | Tipo de comida | `"desayuno"` / `"almuerzo"` / `"cena"` |
| `time` | Hora en HH:MM (24h) | `"07:30"` |
| `description` | Qué comiste (mín 10 chars) | `"Omelette con champiñones..."` |
| `image` | Nombre del archivo | `"desayuno.jpg"` |

---

### 6️⃣ Verifica tu estructura

Antes de hacer commit, verifica que tu carpeta tenga esto:

```
meals/2025-11-12/
├── meal.json
├── desayuno.jpg
├── almuerzo.jpg
└── cena.jpg
```

Si no está así, **GitHub Actions te lo dirá** y tendrás que arreglarlo.

---

### 7️⃣ Haz commit

```bash
git add meals/2025-11-12/
git commit -m "Día 1 sin carne: Desayuno, almuerzo y cena vegetarianos 🥗💪"
```

> **Tips para mensajes de commit:**
> - "Día 5: Aguantando firme 💪"
> - "Día 15: ¿Hamburguesa? ¿Quién es esa? 👀"
> - "Día 30: ¡Soy una leyenda! 🏆"

---

### 8️⃣ Push a GitHub

```bash
git push origin comida/2025-11-12
```

---

### 9️⃣ Abre un Pull Request

1. Ve a tu repositorio en GitHub
2. Deberías ver un botón **"Compare & pull request"**
3. Haz clic en él
4. Título: `Día 1: Sin carne 🥗` (o lo que quieras)
5. En la descripción, cuéntales qué comiste:
   ```
   Día 1 del reto:
   - Desayuno: Omelette con champiñones
   - Almuerzo: Ensalada fresca
   - Cena: Pasta integral

   Sí se puede! 💪
   ```
6. Haz clic en **"Create pull request"**

---

### 🔟 Espera a que GitHub Actions valide

Una vez que abres el PR, **automáticamente** va a:

✅ Verificar que el JSON sea válido
✅ Confirmar que todas las fotos existen
✅ Validar que los nombres sean correctos
✅ Comprobar que haya descripciones
✅ Asegurar que todo sea vegetariano

**Si pasa:**
- 🎉 Se mergea automáticamente
- ✅ Aparece en el dashboard
- 📊 Se actualiza tu progreso

**Si falla:**
- 📝 GitHub Actions te comenta qué arreglaste
- 🔧 Haces los cambios
- 🔄 Haces push nuevamente
- ✅ Listo!

---

## ❌ Errores Comunes (Y cómo evitarlos)

### ❌ "JSON inválido"

**Problema:** El archivo `meal.json` tiene errores

**Solución:**
1. Ve a https://jsonlint.com/
2. Copia tu JSON
3. Pega en el validador
4. Si aparece rojo, hay un error (falta coma, comilla, etc.)
5. Arréglalo y vuelve a intentar

**Ejemplo de error:**
```json
❌ INCORRECTO - falta coma
{
  "date": "2025-11-12"  ← FALTA COMA AQUÍ
  "user": "Randall"
}

✅ CORRECTO
{
  "date": "2025-11-12",  ← COMA AQUÍ
  "user": "Randall"
}
```

### ❌ "Imagen no encontrada"

**Problema:** El nombre del archivo de imagen no coincide

**Solución:**
- Archivo: `desayuno.jpg` ✅
- JSON dice: `"desayuno.jpg"` ✅
- **Debe coincidir exactamente** (mayúsculas/minúsculas importan)

### ❌ "Fecha inválida"

**Problema:** No usaste el formato correcto

**Solución:**
- ❌ `12-11-2025` (mal)
- ❌ `2025/11/12` (mal)
- ✅ `2025-11-12` (bien)

### ❌ "Hora inválida"

**Problema:** Formato incorrecto de hora

**Solución:**
- ❌ `7:30 AM` (mal)
- ❌ `7:30` (incompleto)
- ✅ `07:30` (correcto, 24h)
- ✅ `19:00` (correcto, 24h)

### ❌ "Descripción muy corta"

**Problema:** Escribiste menos de 10 caracteres

**Solución:**
- ❌ `"Pizza"` (5 caracteres)
- ✅ `"Pizza vegetariana con champiñones"` (36 caracteres)

---

## ✅ Validaciones (Lo que NO puedes evitar)

El sistema valida automáticamente que:

| Validación | Descripción |
|-----------|-------------|
| **JSON válido** | Debe ser JSON correcto (sin errores de sintaxis) |
| **Campos requeridos** | date, user, meals (todos obligatorios) |
| **Fecha YYYY-MM-DD** | Formato de fecha correcto |
| **Tipo de comida** | Solo: desayuno, almuerzo, cena |
| **Sin duplicados** | No puede haber 2 desayunos en el mismo día |
| **Horas HH:MM** | Formato 24h (07:30, no 7:30 AM) |
| **Descripciones** | Mínimo 10 caracteres |
| **Imágenes presentes** | Todos los archivos deben existir |
| **Formatos válidos** | JPG, PNG, GIF, WebP |
| **Tamaño máximo** | 5MB por imagen |

---

## 📸 Tips para Mejores Fotos

- 📷 **Buena iluminación** - Foto clara y nítida
- 🎯 **Encuadre** - Que se vea toda la comida
- 📏 **Composición** - Intenta hacer bonitas las fotos
- 🎨 **Presentación** - Plato limpio, bien distribuido
- ⚡ **Tamaño** - No más de 5MB (casi siempre tu celular está bien)

---

## 🎉 Una Vez Aprobado

Cuando tu PR sea merged:

1. ✅ Aparece en la **galería** del dashboard
2. 📊 Se actualiza el **progreso**
3. 📅 Aparece en la **línea de tiempo**
4. 🎯 Se cuentan los **días completados**

---

## 🚀 El Flujo Completo (Resumido)

```bash
# Día 1: Setup (solo una vez)
git clone https://github.com/desdelinux/vegetarian-challenge.git
cd vegetarian-challenge

# Cada día:
git checkout -b comida/2025-11-12        # Crea rama
mkdir -p meals/2025-11-12                # Crea carpeta
# Copia fotos: desayuno.jpg, almuerzo.jpg, cena.jpg
# Crea meal.json con los datos
git add meals/2025-11-12/                # Agrega cambios
git commit -m "Día 1: Sin carne 💪"      # Commit
git push origin comida/2025-11-12        # Push
# Abre PR en GitHub 🎉
```

---

## 💡 Comandos Útiles

```bash
# Ver estado de tu rama
git status

# Ver cambios que hiciste
git diff

# Deshacer cambios (si la cagaste)
git checkout -- meals/2025-11-12/

# Ver las ramas que tienes
git branch

# Cambiar de rama
git checkout main
```

---

## 🆘 Necesitas Ayuda?

1. **¿Error en GitHub?** → Lee el mensaje de GitHub Actions
2. **¿Problema con Git?** → Google es tu amigo
3. **¿Duda sobre validaciones?** → Revisa la tabla de validaciones arriba

---

## 😂 Mensajes de Commit Inspiracionales

```
git commit -m "Día 1: Aquí vamos 🚀"
git commit -m "Día 5: ¿Hamburguesa? Nunca la conocí"
git commit -m "Día 10: Esto es más fácil de lo esperado (mentira)"
git commit -m "Día 15: Viendo un anuncio de pollo asado 👀"
git commit -m "Día 20: Todavía aquí, sorprendido"
git commit -m "Día 30: ¡Un mes! Soy una leyenda 🏆"
git commit -m "Día 45: La gente me pregunta si extraño la carne"
git commit -m "Día 60: Dos meses sin carne, sin morir"
git commit -m "Día 90: MITAD DEL CAMINO BABY 🎉"
git commit -m "Día 120: Vegetal puro"
git commit -m "Día 150: 150 días de gloria"
git commit -m "Día 180: 🎊 LO LOGRÉ. SOY VEGETARIANO CERTIFICADO 🥗"
```

---

## 🎯 El Gran Final

Cuando llegues al día 180:

```
╔════════════════════════════════════════════╗
║     🎊 FELICIDADES RANDALL 🎊             ║
║                                            ║
║  ✅ 180 días sin carne                    ║
║  ✅ 540 comidas documentadas              ║
║  ✅ 180 pull requests aprobados           ║
║  ✅ 1 leyenda viviente                    ║
║                                            ║
║  Ahora la pregunta es...                  ║
║  ¿Continúas o vuelves a la carne? 🤔     ║
║                                            ║
╚════════════════════════════════════════════╝
```

---

<div align="center">

**¡Vamos Randall! 💪🥗**

*Un paso (y una comida) a la vez.*

Recuerda: **No hay forma de hacer trampa. La máquina lo verá.**

---

Hecho con ❤️ para apoyarte en tu reto.

</div>
