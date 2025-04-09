<template>
  <div class="form-container">
    <h1>Formulario</h1>
    <form @submit.prevent="enviar" class="form">
      <input v-model="nombre" placeholder="Nombre" class="input" />
      <input v-model="apellidos" placeholder="Apellidos" class="input" />
      <input v-model="correo" placeholder="Correo" class="input" />
      <input v-model="direccion" placeholder="Dirección" class="input" />
      <button type="submit" class="submit-btn">Enviar</button>
    </form>
    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      correo: '',
      direccion: '',
      mensaje: ''
    }
  },
  methods: {
    enviar() {
      axios.post('http://localhost:3000/formulario', {
        nombre: this.nombre,
        apellidos: this.apellidos,
        correo: this.correo,
        direccion: this.direccion
      })
        .then(() => {
          this.mensaje = 'Formulario enviado con éxito'
          this.nombre = ''
          this.apellidos = ''
          this.correo = ''
          this.direccion = ''
        })
        .catch(() => {
          this.mensaje = 'Error al enviar el formulario'
        })
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border 0.3s;
}

.input:focus {
  border: 1px solid #4CAF50;
  outline: none;
}

.submit-btn {
  padding: 0.8rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}

.mensaje {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #4CAF50;
}

.mensaje.error {
  color: red;
}
</style>
