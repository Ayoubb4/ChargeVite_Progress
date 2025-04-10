# 🎨 Proyecto Formulario Frontend

Este es el frontend del proyecto de formulario conectado a una API NestJS. Permite a los usuarios rellenar un formulario y enviar los datos al backend para ser guardados en una base de datos PostgreSQL.

---

## ⚙️ Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Ayoubb4/ChargeVite_Progress/tree/main/proyecto-db-fe
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd proyecto-db-fe
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

---

## 🚀 Ejecución del proyecto

```bash
npm run dev
```

La app estará disponible en [http://localhost:5173](http://localhost:5173)

---

## 🧪 Estructura del proyecto

```
src/
├── components/
│   └── Formulario.vue
├── App.vue
└── main.ts
```

---

## 📝 Funcionalidad

- Formulario con campos: nombre, apellidos, correo, dirección.
- Envío de datos al backend con Axios (`POST /formulario`).
- Feedback visual tras el envío (mensaje de éxito o error).
- Estilo responsivo y moderno con animaciones y gradientes.

---

## ✅ Checklist

- [x] Conexión con backend NestJS
- [x] Estilos con CSS scoped
- [x] Formulario funcional
- [x] Animación con keyframes
- [x] Separación en componentes

---

## 💡 Notas

- Si usas alias `@` en imports, asegúrate de tener configurado `vite.config.ts` con `resolve.alias`.
- Asegúrate de que el backend esté corriendo en `localhost:3000` o cambia el endpoint en `Formulario.vue`.

---

## 📄 Licencia

MIT License