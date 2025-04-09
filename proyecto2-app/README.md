# Proyecto Vue + Ionic

Este proyecto es una aplicación Vue.js combinada con el framework Ionic para crear aplicaciones móviles híbridas. Se utiliza para mostrar los últimos lanzamientos de artistas musicales más escuchados, interactuar con una API y mostrar la información de una manera sencilla y eficiente.

## Tecnologías utilizadas

- **Vue 3**: Framework JavaScript para construir la interfaz de usuario.
- **Ionic Vue**: Framework para crear aplicaciones móviles híbridas con Vue.js.
- **Vue Router**: Librería para manejar rutas en una aplicación Vue.
- **Vue I18n**: Solución para la internacionalización de la aplicación.
- **Axios (a través de un servicio API)**: Realiza las solicitudes HTTP para obtener datos.

## Estructura del Proyecto

```bash
src/
├── main.ts                # Configuración de la aplicación y el montado de Vue
├── App.vue                # Componente raíz de la aplicación
├── router/
│   └── index.ts           # Configuración de las rutas de la aplicación
├── services/
│   └── api.ts             # Servicio API para manejar las solicitudes
├── views/
│   └── HomePage.vue       # Vista principal que muestra los artistas y sus lanzamientos
├── theme/
│   └── variables.css      # Variables de tema de Ionic
```

## Instalación

Para comenzar con este proyecto, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. **Instala las dependencias**:
   Asegúrate de tener **Node.js** y **npm** instalados en tu sistema. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**:
   Después de instalar las dependencias, ejecuta la aplicación con:
   ```bash
   npm run serve
   ```

   Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:8080](http://localhost:8080).

## Funcionalidades

- **Página de inicio (HomePage.vue)**:
    - Muestra una lista de los artistas más escuchados junto con la información de sus últimos lanzamientos.
    - Permite escuchar a los artistas o ver sus lanzamientos en Spotify.
    - Los artistas y sus lanzamientos se obtienen mediante una solicitud a la API.

- **Internacionalización**:
    - El proyecto soporta dos idiomas: **Español** y **Inglés**.
    - Los textos se traducen automáticamente según el idioma del navegador.

## Explicación del Código

### `src/router/index.ts`

Configura las rutas de la aplicación utilizando `vue-router`. En este caso, se tiene una ruta principal (`/home`) que redirige desde la raíz (`/`).

### `src/services/api.ts`

Este archivo contiene la lógica para interactuar con la API. Realiza las solicitudes y maneja los errores. Si la solicitud es exitosa, los datos de los artistas se almacenan en el estado `artists`.

### `src/views/HomePage.vue`

Este archivo contiene la lógica de la vista principal. Utiliza componentes de **Ionic Vue** para mostrar una lista de artistas y sus lanzamientos. Cada artículo tiene un enlace a Spotify, y se maneja la carga de datos con un spinner y un mensaje de error en caso de fallos.

### `src/main.ts`

Este archivo configura la instancia principal de la aplicación Vue, monta la aplicación, e incluye la configuración de **Ionic Vue** y **Vue I18n** para manejar la internacionalización.

### `src/App.vue`

Este archivo es el componente raíz que contiene un `<ion-router-outlet />` donde se renderizan las vistas asociadas a las rutas definidas.

### `src/theme/variables.css`

Este archivo contiene las variables de tema de **Ionic**, como colores, fuentes y tamaños, para personalizar la apariencia de la aplicación.

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request para que revisemos tus cambios.

## Licencia

Este proyecto está bajo la licencia **MIT**.