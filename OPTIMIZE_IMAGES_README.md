# Guía de `optimize-images.js`

El archivo `scripts/optimize-images.js` es un script de **Node.js** diseñado para buscar, comprimir y convertir automáticamente las imágenes del proyecto a un formato web moderno (**WebP**), lo que ayuda a que el sitio web cargue mucho más rápido.

## ¿Qué hace este script exactamente?

1. **Escanea la galería**: Recorre de manera automática (incluyendo subcarpetas) la ruta `src/assets/gallery`.
2. **Identifica formatos pesados**: Detecta todas las imágenes que tengan extensión `.jpg`, `.jpeg` o `.png`.
3. **Transforma a WebP**: Utiliza una librería de alto rendimiento llamada [`sharp`](https://sharp.pixelplumbing.com/) para convertir la imagen encontrada al formato `.webp` con una calidad de **80%** (un buen equilibrio entre peso visual y calidad).
4. **Reemplaza el original**: Una vez que la versión optimizada se guarda exitosamente, el script **borra** la imagen original para ahorrar espacio en el disco.

## ¿Cómo usarlo?

Para ejecutar este script y comprimir tus imágenes, abre tu terminal asegurando que estás en la carpeta raíz del proyecto y corre:

```bash
node scripts/optimize-images.js
```

## Nota Importante sobre el Código

En la línea 31 del script tienes esta condición:
```javascript
// Only optimize if > 500KB or if user wants everything converted
if (sizeInMB > 0.5 || true) {
```

Esto verifica si la imagen pesa más de 0.5 MB. Sin embargo, como le has puesto un `|| true` al lado, la condición **siempre es verdadera**. Esto significa que actualmente el script ignorará el peso y **convertirá todas las imágenes** `.jpg` y `.png` que encuentre en esa carpeta, sin importar lo pequeñas que sean. 

Si en algún momento quieres que _solo_ comprima las que pesan más de 500 KB, simplemente debes borrar el `|| true`.
