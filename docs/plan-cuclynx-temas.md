# Plan: Cuclynx Temas (app de Expo)

Borrador para que Killo lo revise. Todavía no hay código. Nada se programa ni se fusiona hasta que diga.

*Asín sí, Brubru. Asín sí, Cuco.*

## 1. Qué se hace

El **Taller de Temas** (https://coclota.github.io/taller-de-temas/) pasa a ser una **app de Expo** de Cuclynx
Labs, como Place y Benito, con lo que pide Killo:
- **Cuentas** como en las demás apps (la misma cuenta Cuclynx).
- Crear temas y **guardarlos** en la cuenta.
- Una **galería** donde los demás los ven, los **valoran** y los **descargan**.
- **Más estilos y más pegatinas**, y otras mejoras (apartado 6).

Se mantiene todo lo que hace hoy el Taller. No se quita ninguna función.

**La web actual se queda funcionando** mientras tanto, sin cambios. Más adelante puede llevar un enlace a la app.

## 2. Propuesta

| | Propuesta |
|---|---|
| Nombre | **Cuclynx Temas** («El taller de Brubru y Cuco») |
| Guías | **Brubru** (nuevo) y **Cuco** |
| Lemas | «Asín sí, Brubru» y el de la marca, «Asín sí, Cuco» |
| Prefijo de tablas | **`temas_`** |
| Repositorio | **nuevo y privado: `Coclota/cuclynx-temas`** (lo crea Killo en GitHub Desktop; yo no puedo crear repositorios). Carpeta `cuclynx-temas`, sin `&` ni `@` |
| Paquete Android | `com.cuclynxlabs.temas` |
| Web de Cuclynx Labs | cuclynxlabs.com/temas |

Por qué un repositorio nuevo: el de `taller-de-temas` es público y publica la web en GitHub Pages. Si metemos ahí
la app, la web deja de funcionar. Las otras apps tienen su repositorio privado.

**Brubru** (idea de Killo): lince de 2 años, amarillito, con un flequillo estrecho en el centro, medio largo.
El más joven de la familia. **Brubru y Cuco son los guías**: Brubru presenta el taller y da consejos; Cuco sale con
él en Inicio y en Cuenta. Misma forma de cara que Cuco. Se dibuja en código como los demás: `src/Brubru.js`
(react-native-svg), partiendo de `src/Lynx.js`. Expresión propuesta: **«¡Chacho!»** (Canarias). Killo puede
elegir otra.

## 3. Pestañas

| Pestaña | Icono | Qué hay |
|---|---|---|
| Inicio | 🏠 | Brubru y Cuco, «Crear un tema», temas listos, lo mejor de la galería, consejo de Brubru, botón de donar |
| Galería | 🖼️ | Temas de otros: nuevos, mejor valorados, más descargados; buscar; valorar; descargar; copiar para editar; denunciar; bloquear |
| Bandeja | ✉️ | Mensajes entre usuarios |
| Tienda | 🛒 | «La tienda de Brubru» (apartado 7) |
| Cuenta | 👤 | Apodo, **Mis temas**, lista de correo, idioma, diseño, modo sencillo, donar, aviso legal, cerrar sesión, borrar cuenta. Abajo, el logo, «Una app de Cuclynx Labs», «Asín sí, Brubru» y Cuco con «Asín sí, Cuco» |

El **editor** se abre a pantalla completa desde Inicio o desde Mis temas, con la vista previa de ordenador y móvil
arriba y las opciones debajo, en modo **Sencillo / Más opciones** como ahora.

## 4. Lo que llevan todas (apartado 0 de la ficha)

1. **Bandeja de entrada**: la de Place (una conversación por pareja, aviso antes de mandar teléfono, correo o
   enlace, denunciar un mensaje, bloquear, dejar de recibir mensajes). Desde un tema de la galería: «Escribir a @autor».
2. **Donaciones**: pantalla «Donar» de Place, con `donation_settings` y `donation_sanctuaries`. En Inicio y Cuenta.
3. **Tienda**: `temas_shop_items` con enlaces `https`, que añade el administrador. Ningún precio sin fuente y fecha.
4. **Lista de Brevo**: casilla **sin marcar** al crear la cuenta, alta con `comunidad`, versión de consentimiento
   propia (`2026-10-xx-temas`). Borrar la cuenta no saca a nadie de la lista; solo darse de baja.
5. **Lemas** en Cuenta.

Además: 6 idiomas (es principal y de respaldo), los 8 diseños de color de siempre más el suyo por defecto
(**amarillo Brubru**, con colores que se lean bien), modo sencillo, icono y pantalla de carga con Brubru.

## 5. La galería: guardar, publicar, valorar y descargar

- **Mis temas**: cada tema se guarda en la cuenta. **Privado por defecto.**
- **Publicar** es un botón aparte, con aviso de que todos lo verán con tu @apodo.
- Un tema se guarda como sus **ajustes** (colores, estilo, pegatinas, texto…), no como imagen. La app lo dibuja en
  el móvil. Así ocupa muy poco y no hace falta guardar imágenes en Supabase.
- **Valorar**: de 1 a 5 estrellas, una valoración por persona y tema, que se puede cambiar. No puedes valorar los
  tuyos. Se ve la media y cuántas valoraciones tiene.
- **Descargar**: genera en el móvil los mismos archivos que hoy (zip de Windows, zip de móvil, PNG). Se cuentan
  las descargas.
- **Copiar para editar**: lo guarda en Mis temas como «Basado en @autor».
- **Seguridad**: denunciar (nombre o texto ofensivo, copia, spam…), se oculta solo tras 3 denuncias de personas
  distintas, bloquear al autor. Límite de temas publicados al día (en `temas_settings`, se cambia sin publicar la app).
  Los nombres y textos no pueden hacerse pasar por la app (Brubru, Cuclynx, admin…).
- **Fotos propias**: en la primera versión, un tema con foto propia **no se puede publicar** (pueden salir caras,
  casas o matrículas). Se puede guardar y descargar, y la foto se queda en el móvil.

## 6. Mejoras

### Más estilos de fondo
Hoy hay 9: degradado, liso, burbujas, olas, montañas, lunares, rayas, estrellas y mi foto. Propongo **12 más**:
corazones, confeti, arcoíris, aurora (luces del norte), mármol, triángulos (geométrico), píxeles, panal
(hexágonos), cuadros escoceses, nubes, luna y noche, y flores.

### Más pegatinas
Hoy hay 16 emojis. Propongo:
- **Pegatinas de Cuclynx**: Brubru, Cuco, Benito, Pupila, Teleo y Marianín (caras dibujadas en código), la
  moneda de Cuco y el martillo de Benito.
- **Unas 24 pegatinas propias** dibujadas en código: corazón, estrella, rayo, nube, sol, luna, planeta, cohete,
  flor, hoja, gota, corona, nota musical, balón, mando de juegos, gato, perro, mariposa, arcoíris, fuego, diamante,
  ancla, gafas de sol y bocadillo de texto.
- Varias pegatinas distintas en el mismo tema (hoy se elige una).
- **Por comprobar**: si los emojis se ven bien al dibujar el PNG en el móvil. Si no, se sustituyen por las
  pegatinas propias. Las propias también evitan problemas de derechos con los dibujos de emojis de cada marca.

### Otras ideas mías
1. **Reto de la semana**: Brubru propone un tema («Otoño», «Mi pueblo», «Retro»…) y la galería tiene su apartado
   para ese reto, con los mejor valorados.
2. **Temas de fechas**: Navidad, Carnaval, Semana Santa, feria, Halloween, verano… que salen solos en Inicio.
3. **Colores sacados de tu foto**: eliges una foto y la app propone dos colores a juego.
4. **Varios fondos en un tema de Windows**: pase de fondos (Windows los cambia cada cierto tiempo).
5. **Pantalla de bloqueo e inicio a juego** para el móvil, y tamaños de tablet.
6. **Iconos a juego** para más apps y carpetas de Windows, y más cursores (texto, espera, mover). Estaban pendientes
   en el Taller.
7. **Perfil de creador**: tus temas publicados, estrellas totales y medallas (primer tema, 100 descargas…), como los
   niveles del CuquiDicci.

## 7. Qué podría tener la tienda

Enlaces `https` a productos, como El mercadillo de Place:
- **Cosas de los linces**: pegatinas, llaveros, tazas, camisetas y peluches de Brubru y Cuco (con una tienda de
  impresión bajo pedido; Killo elige cuál).
- **A juego con tu tema**: fundas de móvil, alfombrillas de ratón, láminas y pósteres impresos con tu fondo.
- **Para el escritorio**: teclados y ratones de colores, soportes de móvil, luces LED (enlaces de afiliado, marcados
  como tales).
- **Packs de temas especiales** y **membresía sin anuncios**: son cosas digitales dentro de la app, así que antes de
  publicar en Google Play tienen que ir por **Google Play Billing**. Primera versión: no.

Ningún precio sin fuente y fecha.

## 8. Técnica

Se parte del código de **Cuclynx Place** (bandeja, mercadillo, donaciones, temas, idiomas, modo sencillo, Marianín
para confirmar borrados, CI y pruebas de RLS) y se cambia lo de Place por lo de Temas.

- Expo SDK 57 + React Native + supabase-js, como Place. Probar con Expo Go.
- **Dibujar los fondos**: `@shopify/react-native-skia`, que viene en Expo Go y permite pintar y sacar PNG. El
  código de dibujo del Taller (`drawWallpaper`, iconos, cursores) se traduce a Skia.
- **Archivos .zip**: JSZip (licencia MIT, ya está en el Taller). **Cursores .cur, sonidos .wav y archivo .theme**:
  se generan en JavaScript como en la web.
- **Guardar y compartir**: `expo-file-system` y `expo-sharing` (para mandarse el .zip al ordenador por correo,
  Drive o WhatsApp). Guardar fotos en el móvil con `expo-media-library`.

### Por comprobar antes de prometerlo
- Que `expo-media-library` deja guardar fotos en Expo Go con Android. Si no, se comparte el PNG y la persona lo guarda.
- Poner el fondo directamente desde la app necesita la app compilada; en Expo Go se explica cómo ponerlo a mano.
- El tema de Windows se usa en el ordenador: la app lo genera y la persona se lo pasa al PC.

## 9. Base de datos (Supabase compartido, prefijo `temas_`)

Migraciones numeradas en `supabase/migrations/`, su rollback en `supabase/rollback/` y pruebas de RLS en
`tests/sql/rls.sh`. RLS en todas las tablas y validación en el servidor. **Sin código postal ni dirección**: esta
app no los necesita.

| Migración | Qué trae |
|---|---|
| 001 base | `temas_profiles` (apodo público único, apodos reservados), `temas_settings` (límites), `temas_shop_items`, `temas_delete_my_account()` |
| 002 bandeja | `temas_conversations`, `temas_messages`, `temas_message_reports`, `temas_blocks` (copiadas de Place) |
| 003 mis temas | `temas_themes`: ajustes del tema validados en el servidor (tamaño, colores, nombres), privados por defecto |
| 004 galería | publicar, `temas_ratings` (1 a 5), `temas_downloads`, `temas_reports`, ocultar tras 3 denuncias |

## 10. Por fases (un PR cada una)

1. **Esqueleto Cuclynx**: cuenta, apodo, pestañas, Cuenta con lemas, idiomas, diseños, modo sencillo, donar, tienda,
   bandeja, Brevo, borrar cuenta, CI. (Migraciones 001 y 002.)
2. **El taller**: el editor del Taller en la app, con vista previa y descargas, y Mis temas. (Migración 003.)
3. **Galería**: publicar, valorar, descargar, copiar, denunciar y bloquear. (Migración 004.)
4. **Brubru**: dibujo, icono y pantalla de carga.
5. **Más estilos y pegatinas**, y las ideas que Killo elija.

Se fusiona solo cuando Killo diga, y después le digo qué migración ejecutar en el SQL Editor de Supabase.

## 11. Preguntas para Killo

1. ¿Creas el repositorio privado `cuclynx-temas` en GitHub? (necesario para empezar)
2. ¿Brubru dice «¡Chacho!» u otra expresión?
3. ¿Qué ideas del apartado 6 entran?
