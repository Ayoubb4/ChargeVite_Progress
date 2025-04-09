# 🎵 Spotify Backend API – NestJS

Este proyecto es una API backend desarrollada con [NestJS](https://nestjs.com), que se conecta con la API oficial de Spotify para obtener información sobre nuevos lanzamientos y artistas destacados. Ideal para apps musicales, dashboards o cualquier proyecto que necesite integrarse con Spotify.

---

## 🚀 Características principales

- 🔐 Autenticación automática con la API de Spotify vía Client Credentials.
- 🧠 Cache inteligente del token con expiración.
- 🎤 Obtención de artistas destacados a partir de los nuevos lanzamientos.
- 🧰 Integración completa con Swagger para explorar y testear los endpoints.
- 📦 Preparado para producción y despliegue.
- 🌐 CORS habilitado para múltiples orígenes (útil para trabajar con frontend como Vue, React o Ionic).

---

## 📁 Estructura del proyecto

```
src/
│
├── services/
│   ├── spotify.controller.ts    # Define el endpoint público de la API
│   └── spotify.service.ts       # Lógica para comunicarse con la API de Spotify
│
├── interfaces/
│   └── spotify.interfaces.ts    # Tipado de respuestas de la API de Spotify
│
├── app.module.ts                # Configuración del módulo principal
└── main.ts                      # Bootstrap de la aplicación + Swagger + CORS
```

---

## 📦 Instalación

```bash
npm install
```

---

## ⚙️ Variables de entorno necesarias

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
```

Puedes obtener estas credenciales desde el [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

---

## ▶️ Correr el proyecto

### Modo desarrollo:

```bash
npm run start:dev
```

### Producción:

```bash
npm run start:prod
```

---

## 📲 Endpoint disponible

### `GET /services/top-artists`

Obtiene una lista de artistas destacados, basados en los nuevos lanzamientos de Spotify.

- 📡 Usa el endpoint `https://api.spotify.com/v1/browse/new-releases`.
- 🔍 Por cada álbum nuevo, extrae el artista principal y su información detallada.
- 🖼️ Devuelve nombre, enlaces, imágenes, y datos del álbum asociado.

---

## 📚 Documentación Swagger

La documentación está disponible automáticamente en:  
[http://localhost:3000/api](http://localhost:3000/api)

Allí puedes ver los endpoints, probar peticiones y ver respuestas en tiempo real.

---

## 🔐 ¿Cómo funciona la autenticación con Spotify?

Esta API usa el flujo de **Client Credentials** de Spotify:

1. Se obtiene un *access token* usando el `client_id` y `client_secret`.
2. El token se guarda en memoria con su tiempo de expiración.
3. Si el token expira, se solicita uno nuevo automáticamente.

---

## ✅ TODO / Mejoras futuras

- [ ] Endpoint para obtener detalles de un artista por ID.
- [ ] Soporte para búsqueda de artistas por nombre.
- [ ] Añadir paginación y control de resultados.
- [ ] Guardar cache en base de datos o Redis (para producción).

---

## 👨‍💻 Autor

Desarrollado por Ayoubb4  

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.