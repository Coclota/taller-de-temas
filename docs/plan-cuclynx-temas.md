# Plan: el Taller de Temas al estilo Cuclynx Labs

Borrador para que Killo lo revise. Todavía no hay código. Nada se programa ni se fusiona hasta que diga.

*Asín sí, Chispa. Asín sí, Cuco.*

## 1. Qué se hace

Killo quiere **editar el Taller de Temas** (`Coclota/taller-de-temas`, https://coclota.github.io/taller-de-temas/)
para que sea una app más de Cuclynx Labs, siguiendo la ficha. No es una app desde cero.

**Por defecto sigue siendo una web** (instalable como app, PWA) en el mismo repositorio y en GitHub Pages:
- Es lo que ya existe y funciona.
- El tema de Windows se usa en el ordenador, y desde el navegador del PC se descarga directamente.
- La alternativa es pasarla a app de Expo como Place y Benito. Eso es rehacerla entera (el dibujo usa el canvas
  del navegador). Si Killo lo prefiere, se hace después.

**Se mantiene todo lo que hace hoy.** No se quita ninguna función. El editor sigue funcionando **sin cuenta y
sin conexión**. La cuenta Cuclynx solo hace falta para lo de comunidad (bandeja, Mis temas en la nube, galería).

## 2. Propuesta

| | Propuesta | Alternativa |
|---|---|---|
| Nombre | **Cuclynx Temas** (subtítulo «El taller de temas de Chispa») | Cuclynx Taller |
| Mascota | **Chispa**, lince nueva | Pupila |
| Lema | «Asín sí, Chispa» y el de la marca, «Asín sí, Cuco» | «Asín sí, Pupila» |
| Prefijo de tablas | **`temas_`** | — |
| Repositorio | **el mismo**, `Coclota/taller-de-temas` | — |
| Web | la misma dirección; más adelante cuclynxlabs.com/temas | — |

**Chispa**: lince naranja (el naranja del Taller, `#FF6B3D`), con la misma forma de cara que Cuco. Lleva un
pañuelo de pintor anudado en la cabeza, un pincel detrás de la oreja y las patas manchadas de colores. Creativa
y un poco desordenada. Expresión: **«¡Chacho!»** (Canarias), una zona que aún no tiene lince.
Se dibuja en SVG partiendo de `src/Lynx.js` de Place (mismos trazos, pasados de react-native-svg a SVG normal).

## 3. Cómo queda al estilo Cuclynx

| Ahora | Al estilo Cuclynx |
|---|---|
| Una sola página larga | **Pestañas abajo** con icono y texto: Taller, Galería, Bandeja, Tienda, Cuenta |
| Solo en español | **6 idiomas**: es (principal y de respaldo), en, fr, it, de, pt |
| Claro u oscuro automático | Los **8 diseños de color** de Cuclynx + el suyo por defecto (**naranja Chispa**), elegidos en Cuenta |
| «Sencillo / Más opciones» | Se queda, y además **modo sencillo** de Cuclynx: letra más grande y menos cosas por pantalla |
| Temas guardados en el navegador | Se quedan, y además **Mis temas** en la cuenta para tenerlos en varios aparatos |
| Icono naranja genérico | Icono y pantalla de carga con **Chispa** sobre su naranja |
| — | Tarjetas redondeadas, botones grandes y textos cercanos, como Place |

### Pestañas
| Pestaña | Icono | Qué hay | ¿Cuenta? |
|---|---|---|---|
| Taller | 🎨 | El editor de hoy entero: temas listos, fondo, pegatinas, texto, colores, iconos, cursor, sonidos, vista previa, descargas e instrucciones. Chispa en la cabecera y botón de donar | No |
| Galería | 🖼️ | Temas que otros publican: nuevos o más gustados, me gusta, copiar para editar, denunciar, bloquear | Sí |
| Bandeja | ✉️ | Mensajes entre usuarios | Sí |
| Tienda | 🛒 | «El taller de Chispa»: enlaces `https` a productos | Ver §5 |
| Cuenta | 👤 | Entrar o crear cuenta, apodo, Mis temas, lista de correo, idioma, diseño, modo sencillo, donar, aviso legal, borrar cuenta. Abajo, el logo, «Una app de Cuclynx Labs», «Asín sí, Chispa» y Cuco con «Asín sí, Cuco» | — |

## 4. Lo que llevan todas (apartado 0 de la ficha)

1. **Bandeja de entrada**: la de Place traducida a web (una conversación por pareja, aviso antes de mandar
   teléfono, correo o enlace, denunciar un mensaje, bloquear, dejar de recibir mensajes). Desde la galería se
   puede escribir al autor de un tema.
2. **Donaciones**: pantalla «Donar» como la de Place, con `donation_settings` y `donation_sanctuaries`.
   Botón en el Taller y en Cuenta.
3. **Tienda**: `temas_shop_items` (título, enlace `https`, imagen, si es de afiliado), que añade el
   administrador. Ningún precio sin fuente y fecha.
4. **Lista de Brevo**: casilla **sin marcar** al crear la cuenta, alta con la función `comunidad`, versión de
   consentimiento propia (`2026-10-xx-temas`). Borrar la cuenta no saca a nadie de la lista; solo darse de baja.
5. **Lemas** en Cuenta, como arriba.

## 5. Técnica

- Sigue siendo HTML + JavaScript sin compilar, como ahora. Se parte el `index.html` en varios archivos
  (`app.js`, `i18n.js`, `themes.js`, `chispa.js`…) para que se pueda mantener.
- **supabase-js** se guarda en `vendor/` con versión fija, como JSZip, para que no dependa de otra web.
- Los textos se pasan a `i18n.js` con las mismas claves que Place donde coincidan.
- Los diseños de color se copian de `src/themes.js` de Place.
- El service worker sube de versión para que los que la tienen instalada reciban la nueva.

### Cosas a tener en cuenta (comprobadas o por comprobar)
- **El repositorio es público** (GitHub Pages lo necesita en cuenta gratuita). La dirección de Supabase y la clave
  pública *anon* quedarían a la vista. Eso es normal: esa clave es pública por diseño y lo que protege los datos
  es la RLS. **Nunca** irá la *service_role*, la de Brevo ni la de Anthropic. Killo decide si le parece bien.
- **Entrar con correo en una web**: hay que añadir `https://coclota.github.io/taller-de-temas/` en Supabase ›
  Authentication › URL Configuration para que los enlaces de confirmación vuelvan a la web. Lo hace Killo.
- **Donaciones y tienda sin cuenta**: en Place las tablas solo las lee quien ha entrado. No he visto la RLS de
  `donation_*` (está en el repositorio de Coin). **Por comprobar.** Si solo se leen con cuenta, el botón de
  donar pide entrar o se abre una función pública que solo devuelva lo necesario.
- Las fotos propias **no** se suben a la galería en esta versión (pueden salir caras o casas). Se quedan en el
  aparato, como ahora.

## 6. Base de datos (Supabase compartido, prefijo `temas_`)

Carpeta nueva `supabase/migrations/` con su `supabase/rollback/`, y pruebas de RLS en `tests/sql/rls.sh`
(copiadas de Place). RLS en todas las tablas y validación en el servidor. Sin código postal ni dirección.

| Migración | Qué trae |
|---|---|
| 001 base | `temas_profiles` (apodo público único, apodos reservados), `temas_settings` (límites), `temas_shop_items`, `temas_delete_my_account()` |
| 002 bandeja | `temas_conversations`, `temas_messages`, `temas_message_reports`, `temas_blocks` (de Place) |
| 003 mis temas | `temas_themes`: los ajustes del tema validados en el servidor, **privados por defecto** |
| 004 galería | publicar y ocultar, `temas_likes`, `temas_reports`, se oculta solo tras 3 denuncias |

Más un CI en GitHub Actions: pruebas de la base de datos y comprobar que la web carga sin errores.

## 7. Por fases (un PR cada una)

1. **Aspecto Cuclynx**: pestañas, diseños de color, modo sencillo, 6 idiomas, Chispa (icono, cabecera y pantalla
   de carga), Cuenta con lemas. Todo sin cuenta todavía. El editor igual que hoy.
2. **Cuenta Cuclynx**: entrar o crear cuenta, apodo, lista de Brevo, donar, tienda, borrar cuenta. (Migración 001.)
3. **Bandeja**. (Migración 002.)
4. **Mis temas y galería**. (Migraciones 003 y 004.)

Se fusiona solo cuando Killo diga, y después le digo qué migración ejecutar en el SQL Editor de Supabase.
Más adelante: lo pendiente del Taller (más iconos y cursores) y, si se quiere, la app de Expo o la versión de
Google Play (con Google Play Billing si hay pagos).

## 8. Preguntas para Killo

1. ¿Sigue siendo web (recomendado) o la pasamos a app de Expo?
2. ¿Nombre **Cuclynx Temas** con **Chispa**? (o Pupila)
3. ¿Te parece bien que la clave pública *anon* quede en el repositorio público?
