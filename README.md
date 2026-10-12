# Taller de Temas

App web para crear temas de forma sencilla, pensada para todas las edades:

- **Windows 10 y 11:** un tema completo (.zip con archivo `.theme`) con fondo, color de acento, modo claro u oscuro, barra de tareas, iconos del escritorio, cursor y sonidos.
- **Móvil (Android e iPhone):** fondos a la medida de cada pantalla e iconos para las apps.

Funciona en cualquier sistema desde el navegador, se puede instalar como app (PWA) y sigue funcionando sin conexión.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera: diseño, editor y exportación |
| `manifest.webmanifest` | Nombre, colores e iconos de la app instalada |
| `sw.js` | Guarda la app para usarla sin conexión |
| `icons/` | Iconos de la app (normal, adaptable de Android y de iPhone) |
| `vendor/jszip.min.js` | Librería que crea los archivos .zip (licencia MIT, en `vendor/JSZIP-LICENSE.md`) |
| `.nojekyll` | Hace que GitHub Pages publique los archivos tal cual |

## Publicarla en GitHub Pages

1. Crea una cuenta gratuita en [github.com](https://github.com) si no la tienes.
2. Arriba a la derecha, pulsa **+ > New repository**. Ponle de nombre `taller-de-temas`, márcalo como **Public** y pulsa **Create repository**.
3. En la página del repositorio, pulsa **uploading an existing file** (o **Add file > Upload files**).
4. Descomprime este .zip en tu ordenador y **arrastra todo el contenido de la carpeta** (no la carpeta en sí) a la página de GitHub. Pulsa **Commit changes**.
   - El archivo `.nojekyll` está oculto en algunos sistemas. Si no aparece al arrastrar, no pasa nada: la app funciona igual.
5. Ve a **Settings > Pages**. En **Source** elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y pulsa **Save**.
6. Espera uno o dos minutos y recarga esa página: verás la dirección de tu app, del estilo `https://TU_USUARIO.github.io/taller-de-temas/`.

## Instalarla como app

- **Ordenador (Chrome o Edge):** abre la dirección y pulsa el icono de instalar en la barra de direcciones.
- **Android (Chrome):** menú de tres puntos > **Instalar aplicación**.
- **iPhone (Safari):** botón compartir > **Añadir a pantalla de inicio**.

## Hacer cambios

- Cada vez que cambies archivos, sube la versión en la primera línea de código de `sw.js` (`const VERSION = "v1"` → `"v2"`). Así los que ya la tienen instalada reciben la versión nueva.
- Para probarla en tu ordenador antes de subirla, ábrela con un servidor local (por ejemplo `python -m http.server` dentro de la carpeta y entra en `http://localhost:8000`). Abriendo `index.html` con doble clic también funciona, pero sin el modo sin conexión.

## Seguir desarrollándola con Claude

Cuando el repositorio exista en GitHub, pásale a Claude el enlace (`https://github.com/TU_USUARIO/taller-de-temas`). Claude puede conectarlo a la conversación, hacer los cambios y subirlos directamente, sin que tengas que volver a arrastrar archivos.

Ideas pendientes:
- Packs de iconos para más apps y para carpetas de Windows.
- Más estilos de cursor (texto, espera, mover).
- Galería para compartir temas entre usuarios.
- Versión para Google Play y Microsoft Store con PWABuilder (no hace falta Capacitor).

## Límites de cada sistema

- **Windows:** la barra de tareas solo puede llevar el color de acento y únicamente en modo oscuro.
- **Android:** el fondo y los colores del sistema (Material You) sí; los iconos, con un launcher que admita iconos propios.
- **iPhone:** solo fondos de pantalla e iconos mediante la app Atajos. No hay temas completos ni cambio de sonidos.
- **Móviles en general:** no permiten cambiar el cursor ni los sonidos del sistema desde una app.
