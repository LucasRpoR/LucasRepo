# Página de ejemplo

Archivos creados:

- `index.html` — estructura principal
- `styles.css` — estilos
- `script.js` — pequeñas interacciones (modo oscuro, formulario)

Cómo ver la página:

1. Abrir `index.html` en tu navegador.

O ejecutar un servidor local (recomendado para rutas relativas):

```bash
# Python 3
cd "~/Documents/website"
python -m http.server 8000
# luego abrir http://localhost:8000
# Página de ejemplo

Archivos creados:

- `index.html` — estructura principal
- `styles.css` — estilos
- `script.js` — pequeñas interacciones (modo oscuro, formulario)

Cómo ver la página:

1. Abrir `index.html` en tu navegador.

O ejecutar un servidor local (recomendado para rutas relativas):

```bash
# Python 3
cd "%USERPROFILE%\Documents\website"
python -m http.server 8000
# luego abrir http://localhost:8000
```

Siguientes pasos sugeridos:

- Personalizar textos, colores y contenido.
- Añadir imágenes en una carpeta `images/`.
- Conectar el formulario a un backend o servicio de correo.

---

## Despliegue en GitHub Pages

Pasos rápidos:

1. Crea un repo en GitHub (https://github.com/new) y copia la URL remota (https://github.com/usuario/repo.git).
2. En Windows puedes usar el script `push_to_github.bat` incluido. Abre CMD/PowerShell en la carpeta `website` y ejecuta:

```powershell
.\push_to_github.bat
```

3. En GitHub, ve a Settings → Pages → Source y selecciona `main` / (root). Guarda.

4. (Opcional) Dominio personalizado: crea un archivo llamado `CNAME` en la raíz del proyecto con tu dominio completo (por ejemplo `ejemplo.com`) y empuja de nuevo. Luego, en tu proveedor DNS, añade un `CNAME` para `www` apuntando a `usuario.github.io` o usa los registros A de GitHub Pages para la raíz.

Notas:

- GitHub Pages activa SSL automáticamente en unos minutos.
- Si quieres, puedo crear el archivo `CNAME` por ti si me das el dominio completo.
