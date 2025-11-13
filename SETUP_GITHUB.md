# 🚀 Configuración en GitHub Pages

Sigue estos pasos para publicar tu reto vegetariano en GitHub Pages:

## 1️⃣ Crea un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el **+** en la esquina superior derecha
3. Selecciona **New repository**
4. Nombre del repositorio: **vegetarian-challenge**
5. Descripción: "Reto vegetariano de 6 meses - Tracker interactivo"
6. Elige **Public** (para que sea accesible públicamente)
7. Haz clic en **Create repository**

## 2️⃣ Conecta tu repositorio local con GitHub

En tu terminal, dentro del directorio `vegetarian-challenge`, ejecuta:

```bash
# Reemplaza <TU_USUARIO> con tu usuario de GitHub
git remote add origin https://github.com/<TU_USUARIO>/vegetarian-challenge.git

# Renombra la rama a 'main' (opcional pero recomendado)
git branch -M main

# Sube el contenido
git push -u origin main
```

## 3️⃣ Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. En el menú izquierdo, busca **Pages**
4. En "Source", selecciona **Deploy from a branch**
5. Selecciona la rama **main** y la carpeta **(root)**
6. Haz clic en **Save**
7. Espera 1-2 minutos y refréscate

## 4️⃣ Accede a tu sitio

Tu sitio estará disponible en:
```
https://<TU_USUARIO>.github.io/vegetarian-challenge/
```

## 📝 Cómo actualizar tu progreso

Cada vez que registres nuevas comidas (los datos se guardan localmente):

1. **Para hacer backup** (recomendado):
   - En la sección de Configuración ⚙️
   - Haz clic en **📥 Exportar Datos**
   - Guarda el archivo JSON en un lugar seguro

2. **Para compartir tu progreso**:
   - Simplemente comparte la URL de tu sitio
   - Los visitantes verán tus comidas registradas

## 🔄 Sincronizar datos entre dispositivos (Opcional)

Si quieres usar múltiples dispositivos:

1. Exporta tus datos desde un dispositivo
2. Ve a otro dispositivo y accede al sitio
3. En la sección de Configuración ⚙️
4. Haz clic en **📤 Importar Datos**
5. Selecciona el archivo JSON exportado

## 📚 Características principales

✅ **Tracker visual** - Sigue tu progreso hacia los 180 días
✅ **Galería de fotos** - Visualiza todas tus comidas vegetarianas
✅ **Filtros** - Filtra por tipo de comida (desayuno, almuerzo, cena)
✅ **Línea de tiempo** - Ve tu progreso día a día
✅ **Datos locales** - Tus datos se guardan en tu navegador
✅ **Exportar/Importar** - Crea backups de tus datos
✅ **Diseño responsivo** - Funciona en móvil, tablet y escritorio

## 💡 Tips

- 📸 Toma fotos claras y bien iluminadas de tus comidas
- ✍️ Agrega descripciones interesantes de lo que comiste
- 📅 Trata de registrar tus 3 comidas diariamente para completar días
- 🎯 Visualiza tu progreso regularmente para mantenerte motivado

## 🆘 Solución de problemas

**"No puedo ver mi sitio"**
- Espera 5-10 minutos después de publicar
- Verifica que GitHub Pages esté habilitado en Settings
- Intenta acceder en una pestaña incógnito

**"Los datos desaparecieron"**
- Los datos se guardan en localStorage del navegador
- Si limpias el caché del navegador se perderán
- Siempre mantén un backup exportado

**"¿Cómo cambio el nombre del repositorio?"**
- En GitHub: Settings → General → Repository name
- Actualiza tu `.git/config` localmente si es necesario

---

¡Feliz reto vegetariano! 🌱
