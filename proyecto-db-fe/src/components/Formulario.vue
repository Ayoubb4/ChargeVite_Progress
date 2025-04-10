<template>
  <div class="form-container">
    <h1>Formulario de Registro</h1>
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
    async verificarUsuario() {
      try {
        const response = await axios.get('http://localhost:3000/saludo', {
          params: { correo: this.correo }
        });

        if (response.data.includes("Hola de nuevo")) {
          this.mensaje = response.data;
          return true;
        } else {
          this.mensaje = response.data;
          return false;
        }
      } catch (error) {
        this.mensaje = 'Error al verificar el usuario';
        return false;
      }
    },

    async enviar() {
      const usuarioRegistrado = await this.verificarUsuario();

      if (!usuarioRegistrado) {
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
}
</script>


<style scoped>
.form-container {
  padding: 50px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease-in-out;
}

.form-container:hover {
  transform: scale(1.05);
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.input {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #333;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input:focus {
  border: 2px solid #2575fc;
  box-shadow: 0 0 8px rgba(37, 117, 252, 0.5);
}

.submit-btn {
  padding: 1rem;
  font-size: 1.1rem;
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  background-color: #6a11cb;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(2px);
}

.mensaje {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #28a745;
}

.mensaje.error {
  color: red;
}

</style>
