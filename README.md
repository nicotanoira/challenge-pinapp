This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Frontend Senior (Web)

## Desafio a resolver de Aplicativo Web:

Despliega la Web App en Vercel y sube el código a tu cuenta de Github, este repositorio debe ser público.

### Requerimientos técnicos:

- Se debe usar NextJS como framework.
- Se debe usar App Router para la navegación.
- Se debe usar TailwindCSS para estilos.
- Se debe usar Typescript como lenguaje.
- El fetching de datos debe hacerse del lado del servidor en medida de lo posible según consideración del desarrollador.
- Usar una librería de UI a preferencia de desarrollador.
- Se deben mockear las peticiones de los endpoints de la API de producto para que la aplicación pueda ser probada. **Encontrarás la documentación de la API adjunto (open-api-spec.yml)**

> Se recomienda el uso de [JSON Server](https://www.npmjs.com/package/json-server) para la generación de datos de prueba. Pero puedes usar cualquier otra librería de servidor de datos.


#### Interfaz de Página de Listado de Productos (PLP):

- Se debe renderizar en la ruta raíz (/)
- La interfaz debe permitir a los usuarios realizar búsqueda utilizando el código de SKU o nombre del producto a través de un campo de entrada de texto, este deberá tener un debounce de 500ms previo a realizar la búsqueda.
- La interfaz debe mostrar un loader mientras la búsqueda se procesa.
- El resultado de la búsqueda debe mostrar información básica del producto, incluyendo al menos el nombre del SKU, la categoría, marca y el precio.
- Cada resultado de búsqueda debe incluir un botón "Ver Detalle" que redirija a la interfaz de Página de Producto (PDP).
- **Opcional:** usar react-query para crear un paginado de scroll infinito manteniendo los valores iniciales del SSR

####  Interfaz de Página de Detalle de Producto (PDP):

- Se debe renderizar en la siguiente ruta: `/products/:sku`
- Debe mostrarse un loader mientras se carga la información del lado del servidor.
- La interfaz de Página de Producto debe mostrar la siguiente información:
Nombre del producto, código de SKU, foto principal del producto.
categoría, marca, precio de lista del producto y especificaciones del producto.
- Debe mostrar un mensaje de “No encontrado” cuando fallé el API devuelva un error 404.
- Deberá mostar un mensaje de “No se pudo cargar” cuando fallé el API devuelva un error 500.