# 🛠️ Proyecto Formulario Backend

Este es el backend de la aplicación de formulario, desarrollado con **NestJS**, **TypeScript** y conectado a una base de datos **PostgreSQL**. Recibe datos enviados desde el frontend y los guarda en la base de datos.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Cors](https://www.npmjs.com/package/cors)

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Ayoubb4/ChargeVite_Progress/tree/main/proyecto-db-be
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd proyecto-db-be
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz con los siguientes datos:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=1234
DATABASE_NAME=proyecto_db
PORT=3000
```

---

## 🧪 Ejecución en desarrollo

```bash
npm run start:dev
```

El servidor se iniciará en [http://localhost:3000](http://localhost:3000)

---

## 📬 Endpoint disponible

- `POST /formulario`: Guarda los datos enviados desde el frontend (nombre, apellidos, correo, dirección).

---

## 🗂️ Estructura del proyecto

```
src/
├── formulario/
│   ├── formulario.controller.ts
│   ├── formulario.service.ts
│   └── formulario.entity.ts
├── app.module.ts
└── main.ts
```

---

## ✅ Checklist

- [x] Conexión a PostgreSQL
- [x] Ruta POST para guardar datos
- [x] Validación básica
- [x] CORS habilitado

---

## 📝 Notas

- Puedes usar herramientas como Postman o Insomnia para probar el endpoint.
- Asegúrate de que la base de datos esté creada antes de iniciar el backend.

---

## 📄 Licencia

MIT License