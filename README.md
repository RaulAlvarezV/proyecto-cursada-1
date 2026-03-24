# Sport Zone - Entrega Final React

Esta app es un e-commerce hecho con React para la entrega final del curso.

## Tecnologías

- React
- React Router DOM
- Context API
- Firebase (Firestore)

## Funcionalidades

- Listado dinámico de productos desde Firestore
- Filtro por categorías
- Vista detalle de producto
- Selector de cantidad con validación por stock
- Carrito global con Context
- Checkout con generación de orden en Firestore
- Mensaje final con ID de orden
- Descuento de stock al confirmar compra

## Rutas

- `/` catálogo completo
- `/category/:categoryId` catálogo por categoría
- `/item/:id` detalle del producto
- `/cart` carrito
- `/checkout` formulario de compra

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` en la raíz (podés copiar `.env.example`) y completar tus datos de Firebase.
4. Ejecutar el proyecto:

```bash
npm run dev
```

## Configuración de Firestore

Crear las colecciones:

- `productos`
- `ordenes`

Cada documento de `productos` debería tener estos campos:

- `name` (string)
- `price` (number)
- `category` (string)
- `description` (string)
- `image` (string)
- `stock` (number)

Ejemplo de categorías usadas:

- `remeras`
- `shorts`
- `zapatillas`

## Nota

Las credenciales de Firebase no se suben al repositorio. Están en variables de entorno.