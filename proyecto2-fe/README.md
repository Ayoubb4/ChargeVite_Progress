# 🎵 Vue + NestJS Spotify Dashboard

Aplicación web construida con **Vue 3 + Vite** para el frontend y **NestJS** para el backend. La aplicación muestra los artistas más populares en Spotify y su último lanzamiento reciente, utilizando la API de Spotify de forma optimizada.

---

## 📁 Estructura del Proyecto

```
📦 src
├── apiData             # Conexiones Axios para Spotify y el backend
├── components          # Componentes Vue para mostrar la información
├── types               # Interfaces TypeScript para tipado de datos
├── assets              # Archivos estáticos y estilos
├── App.vue             # Componente principal
├── main.ts             # Punto de entrada de la app
```

---

## ⚙️ Tecnologías Usadas

### 🔧 Backend (NestJS)

- NestJS
- Axios
- Spotify Web API
- Swagger (documentación automática)
- ConfigService

### 🌐 Frontend (Vue 3 + Vite)

- Vue 3
- Axios
- TypeScript

---

## 🚀 ¿Qué hace esta app?

- 🔐 Conecta con la API de Spotify utilizando autenticación `Client Credentials`.
- 🎤 Muestra una lista de artistas populares y su última publicación.
- 🌍 Está lista para ser traducida a múltiples idiomas (`es`, `en`).
- 🔍 Usa interceptores en Axios para loggear y manejar errores de red.

---

## 📡 Backend

### ▶️ Endpoint disponible

| Método | Ruta                    | Descripción                                             |
|--------|-------------------------|---------------------------------------------------------|
| GET    | `/services/top-artists` | Devuelve artistas destacados con lanzamientos recientes |

### 🧠 Lógica destacada

- Se obtiene un token de acceso desde Spotify y se guarda temporalmente.
- Se hace una petición a los lanzamientos recientes (`new-releases`) de Spotify.
- Se extrae el artista de cada álbum y se amplía con más info (como imagen).

---

## 🌍 Frontend

### 🔌 Datos del backend

```ts
const response = await axios.get('http://localhost:3000/services/top-artists');
```

Los datos obtenidos se muestran de forma elegante en la interfaz gracias a componentes como `ShowSpotiData.vue`.

### 📦 Componentes

- **App.vue** – Punto principal. Llama al endpoint del backend y renderiza la lista de artistas.
- **BackendData.vue** – Componente de prueba para consumir el endpoint `/data` local.
- **ShowSpotiData.vue** – Muestra detalles de los artistas y su release.

---

## 📥 Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/Ayoubb4/ChargeVite_Progress/tree/main/proyecto2-fe
cd proyecto2-fe
```

### 2. Configura las variables

Crea un archivo `.env` en el backend con:

```
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
```

### 3. Instala dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Ejecuta el proyecto

```bash
# Backend
npm run start

# Frontend
npm run serve
```

---

## 📌 Interceptores de Axios (Explicado fácil 🧠)

En ambos entornos (frontend y backend), se usan interceptores para:

- Loggear las URL que se llaman.
- Manejar errores como `401 Unauthorized`.
- Añadir cabeceras automáticamente (`Authorization`, `Custom-Header`, etc).

---

## 🧪 Tests

```bash
# Backend
npm run test
```
---

## 👨‍💻 Autor

Desarrollado con ❤️ por Ayoubb4

---

## 📃 Licencia

Este proyecto está bajo la licencia MIT.

---