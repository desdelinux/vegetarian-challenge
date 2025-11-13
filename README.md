# 🥗 El Reto Vegetariano de Randall - 6 Meses sin Carne 🚀

> **Objetivo:** Que Randall no coma carne durante **6 meses** (180 días)
>
> **Meta:** Documentar cada comida vegetariana con evidencia fotográfica
>
> **Premio:** El honor de ser un verdadero Vauxiano 🏆 (y la gloria de sobrevivir sin hamburguesas)

---

## 😄 La Historia

Randall decidió que **si**, puede ser vegetariano durante 6 meses. "No es tan difícil" dijo. Ahora, gracias a este repositorio, **TODO EL MUNDO** podrá ver si realmente lo logra o si termina pidiendo un pollo asado a los 15 días.

**Spoiler:** Se juega el honor de ser Vauxiano. El mundo lo estará mirando. 👀

---

## 📊 El Sistema (Sí, es oficial)

Este no es un típico reto. Es un **repositorio con CI/CD automático** que valida cada comida:

1. 📸 **Randall toma foto** de sus 3 comidas diarias (desayuno, almuerzo, cena)
2. 🔗 **Abre un Pull Request** con la evidencia
3. ✅ **GitHub Actions valida** que sea vegetariano (JSON correcto, imágenes presentes)
4. 📊 **Dashboard se actualiza** automáticamente mostrando el progreso
5. 🎉 **Todos pueden ver** cuántos días lleva sin carne

---

## 🎯 El Desafío

| Métrica | Meta |
|---------|------|
| **Duración** | 6 meses (180 días) |
| **Comidas/día** | 3 (desayuno, almuerzo, cena) |
| **Total de PRs** | 180 (1 por día) |
| **Total de fotos** | 540 (3 × 180) |
| **Chance de "fracaso"** | Sólo si como carne 🍔❌ |

---

## 📈 Dashboard en Vivo

Puedes ver el progreso de Randall AQUÍ:

👉 **[Ver el avance de Randall](https://desdelinux.github.io/vegetarian-challenge/)** 👈

El dashboard muestra:
- 📊 Progreso visual (0-100%)
- 📅 Días completados (X/180)
- 🍽️ Galería de comidas aprobadas
- 📜 Línea de tiempo (cronológico)
- 🔍 Filtros por tipo de comida

---

## 🥬 Reglas (Sí, hay reglas)

### ✅ Lo que SÍ cuenta como vegetariano:

- 🥬 Verduras (todas)
- 🌾 Granos y cereales
- 🥚 Huevos
- 🧀 Queso y lácteos
- 🫘 Legumbres (frijoles, lentejas)
- 🌰 Frutos secos
- 🍝 Pasta (sin carne)
- 🍕 Pizza sin carnes
- 🌮 Tacos de vegetales
- ☕ Café, jugos, bebidas sin carne

### ❌ Lo que NO cuenta:

- 🍗 Pollo
- 🍖 Carne roja
- 🐟 Pescado (sí, los peces son amigos, no comida)
- 🦐 Mariscos
- 🥓 Jamón, tocino, embutidos
- 🌭 Hot dogs
- 🍔 Hamburguesas
- **Cualquier cosa con "carne"**

---

## 🚀 Cómo Randall Sube sus Comidas

### Paso 1: Tomar fotos
```
📸 Desayuno a las 7:30 AM
📸 Almuerzo a las 12:45 PM
📸 Cena a las 7:00 PM
```

### Paso 2: Crear rama y estructura
```bash
git checkout -b comida/2025-11-12

mkdir -p meals/2025-11-12
# Copiar fotos:
# - desayuno.jpg
# - almuerzo.jpg
# - cena.jpg
```

### Paso 3: Crear meal.json
```json
{
  "date": "2025-11-12",
  "user": "Randall",
  "meals": [
    {
      "type": "desayuno",
      "time": "07:30",
      "description": "Omelette con champiñones, cebolla y tomate. Pan integral.",
      "image": "desayuno.jpg"
    },
    {
      "type": "almuerzo",
      "time": "12:45",
      "description": "Ensalada fresca con lechuga, tomate, pepino y aderezo.",
      "image": "almuerzo.jpg"
    },
    {
      "type": "cena",
      "time": "19:00",
      "description": "Pasta integral con salsa de tomate y verduras salteadas.",
      "image": "cena.jpg"
    }
  ]
}
```

### Paso 4: Hacer PR
```bash
git add meals/2025-11-12/
git commit -m "Día 1 del reto: Sin carne 💪"
git push origin comida/2025-11-12

# Luego abrir PR en GitHub
```

### Paso 5: GitHub Actions valida ✅
La máquina verifica que:
- Las fotos existan
- El JSON sea válido
- Los nombres sean correctos
- Las descripciones tengan sentido

### Paso 6: Dashboard actualizado 📊
Las comidas aparecen automáticamente en:
- Galería de fotos
- Línea de tiempo
- Estadísticas

---

## 😂 Momentos Destacados

> *Se actualizará conforme Randall progrese en el reto*

- **Día 1:** "Esto es fácil, no sé por qué hace tanta queja de gente"
- **Día 5:** "¿Vieron ese anuncio de pizza? 👀"
- **Día 15:** "¿Es normal pensar en pollo a las 3 AM?"
- **Día 30:** "Ya pasé un mes... soy una leyenda" 🏆
- **Día 90:** "Mitad del camino baby!"
- **Día 180:** "🎉 LO LOGRÉ CARNAL, SOY VEGETARIANO CERTIFICADO"

---

## 🏆 Estadísticas Actuales

```
Días completados:      0 / 180 ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%
Comidas registradas:   0
Fotos tomadas:         0
Veces tentado:         ∞ (especialmente con pizza)
Arrepentimiento:       0%
```

---

## 📱 Tecnología (Porque sí, esto es profesional)

Este reto usa:

- 🌐 **GitHub Pages** - Para el dashboard público
- ⚙️ **GitHub Actions** - Para validar automáticamente
- 📝 **JSON** - Para la estructura de datos
- 🎨 **HTML/CSS** - Interfaz bonita y responsiva
- ✅ **Node.js** - Validación inteligente

**Traducción:** Randall no puede hacer trampa porque la máquina lo checará automáticamente. 🤖

---

## 💬 Mensajes de Apoyo

> "Randall, sé que es difícil, pero tú puedes. Los vegetales también tienen sentimientos... espera, no."
> — La sabiduría popular

> "Día 1: Soy vegetariano. Día 180: Soy una leyenda."
> — Randall, probablemente

> "Si puedo ser vegetariano por 180 días, ¿qué más puedo hacer?"
> — Randall cuando lo logre

---

## 📚 Documentación Completa

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Cómo Randall hace los PRs (paso a paso)
- **[SETUP_GITHUB.md](SETUP_GITHUB.md)** - Configuración técnica

---

## 🎉 El Gran Final

**Cuando Randall llegue a 180 días:**

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║      🎊 FELICIDADES RANDALL 🎊                 ║
║                                                   ║
║      HAS SIDO VEGETARIANO POR 6 MESES            ║
║                                                   ║
║      • 180 días sin carne ✅                     ║
║      • 540 comidas documentadas 📸              ║
║      • 180 pull requests aprobados 🔗           ║
║      • 1 leyenda creada 🏆                      ║
║                                                   ║
║      ¿Sigues siendo vegetariano o vuelves       ║
║      a la carne? 🤔                             ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

---

## 🤝 Apoyemos a Randall

¿Quieres apoyar a Randall?

- 👀 Mira su progreso en el dashboard
- 💬 Déjale mensajes de motivación en los PRs
- 📸 Etiquétalo en fotos de comidas vegetarianas
- 🎉 Celebra cada milestone (día 30, 90, 180)

---

## 📞 Contacto

¿Preguntas sobre el reto? Contacta a Randall directamente... o espera a que suba un PR. 😄

---

<div align="center">

**¡Vamos Randall! 💪🥗**

*Atrévete a ser diferente. Atrévete a ser vegetariano.*

*Defiende el honor Vauxiano.* 👑

---

Hecho con ❤️ y un poco de humor para apoyar a **Randall** en su reto más ambitious.

</div>
