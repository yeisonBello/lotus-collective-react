# Lotus Collective - Admin Panel Guide

El panel de administración (`/moments-admin`) de Lotus Collective es el centro de control global para gestionar dinámicamente contenidos y comportamientos de la página principal sin necesidad de modificar el código fuente.

## Cómo acceder
Inicia la versión de desarrollo o producción de la aplicación y navega a la ruta:
`http://localhost:5173/moments-admin`

---

## ⚙️ Testeo del Popup de Suscripción (Subscription Popup)

El componente `SubscriptionPopup` se encarga de mostrar un aviso para captar correos electrónicos (conectado a Mailchimp). Su configuración de tiempo (90 segundos de espera) viene **codificada de forma fija (hardcoded) por razones de optimización y velocidad**. Al no depender de una base de datos, la web es inmune a caídas y carga instantáneamente.

Para facilitar el desarrollo y las pruebas, el Admin Panel incluye una herramienta exclusiva para ti:

### Botón "Reset Test State":
- **¿Qué hace?** Es un atajo diseñado exclusivamente para testeo. Si como usuario ya cerraste el popup cuando te apareció en la pantalla principal (o te suscribiste con éxito), tu navegador anota que no te lo debe volver a mostrar. Al pulsar este botón en el Panel de Administrador, tu navegador individual "olvida" esta marca.
- **¿Para qué sirve?** Te permite volver a ver el Popup nuevamente como si fueras un usuario nuevo cuando vuelvas a navegar a la página principal.
- **Nota:** Esto **solo afecta a tu propio navegador**, no impacta en absoluto la experiencia de los clientes reales en producción.

---

## 📷 Gestión de Imágenes y Galería Automática

Desde el mismo panel también tienes acceso al control del contenido visual:

1. **Uploads automatizados:** Tienes a la vista de un vistazo cuántas imágenes hay en cada sector de la web (Hero, Studio, Live Energy, etc.).
2. Para agregar imágenes nuevas, sencillamente arrastra el arte a la carpeta local correcta (ej: `uploads/hero`) y ejecuta el optimizador de imágenes del sistema.
3. El panel de administración te permite simular y visualizar todas estas imágenes directamente desde esta pre-visualización.

## 📅 Live Content (Shows)
La sección de fechas de shows incluye un enlace directo hacia **Google Sheets**. El equipo de la banda edita las fechas directamente desde el Excel online y se sincronizan instantáneamente y sin intervención con la sección `ShowsSection` en el landing page público.
