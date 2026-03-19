# Página de ejemplo

Archivos creados:

- `index.html` — estructura principal
- `styles.css` — estilos
- `script.js` — pequeñas interacciones (modo oscuro, formulario)

Cómo ver la página:

1. Abrir `index.html` en tu navegador.

O ejecutar un servidor local (recomendado para rutas relativas):

# Asesorias Financieras — Lucas Restrepo

Archivos principales:

- `index.html` — página principal y secciones de servicios
- `styles.css` — estilos y temas
- `script.js` — interacciones (tema, menú, animaciones, confetti)
- `thank-you.html` — página de agradecimiento tras el envío

Cómo ver localmente:

```powershell
cd "%USERPROFILE%\Documents\website"
# Python 3
python -m http.server 8000
# luego abrir http://localhost:8000
```

Despliegue en GitHub Pages
-------------------------

1. Crea un repo en GitHub (https://github.com/new) y copia la URL remota.
2. Desde la carpeta del proyecto en Windows puedes ejecutar el script incluido:

```powershell
.\push_to_github.bat
```

3. En GitHub: Settings → Pages → Source = `main` / (root). Guarda. La URL será `https://TU_USUARIO.github.io/TU_REPO/`.

Dominio personalizado (opcional)
- Crea un archivo llamado `CNAME` en la raíz con tu dominio (ej. `ejemplo.com`) y empuja al repo.
- En tu proveedor DNS añade un `CNAME` para `www` apuntando a `TU_USUARIO.github.io` y/o A records para la raíz según la documentación de GitHub Pages.

Contacto por email desde la web
-------------------------------

El formulario está configurado para enviar mensajes directamente a: `lucasrpor@gmail.com` usando Formsubmit.co. No necesitas backend: cuando alguien envíe el formulario, Formsubmit reenviará el contenido al correo configurado.

Si prefieres otra solución (Netlify Forms, Formspree, o un backend propio), puedo configurarlo.

¿Siguientes pasos sugeridos?

- Probar el formulario enviando un mensaje (llegará a `lucasrpor@gmail.com`).
- Ajustar textos, precios y planes.
- Añadir secciones (testimonios, FAQ, blog) o integrar pagos/agenda.

Optimizar imágenes (rápido)
--------------------------

Si quieres que optimice automáticamente las imágenes que subas a `assets/` (recomiendo convertir a WebP y generar varios tamaños), sigue estos pasos:

1. Instala dependencias (requiere Node.js):

```powershell
cd "%USERPROFILE%\Documents\website"
npm install
```

2. Copia tu imagen original en `assets/` con nombre `hero-bg.jpg` (o `hero-bg.png`).

3. Ejecuta:

```powershell
npm run optimize-images
```

El script generará múltiples versiones (`hero-bg-1600.jpg`, `hero-bg-1200.webp`, etc.). Luego actualiza `styles.css` para apuntar a la versión preferida (`hero-bg-1200.webp`) si lo deseas.

Si quieres que lo haga yo aquí, sube el archivo `hero-bg.jpg` y lo optimizo/commiteo por ti.

***

Si quieres que haga algún cambio en el contenido del sitio (texto, precios, FAQs, agregar servicios), dime qué editar y lo actualizo aquí mismo.

