<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBackendData } from '@/api/backend';

const backendData = ref<string>('');

onMounted(async () => {
  try {
    const data = await getBackendData();
    backendData.value = data.message;
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div>
    <h1>Backend Data</h1>
    <p>{{ backendData }}</p>
  </div>
</template>

<style scoped>
/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: white;
  margin: 0;
  padding: 0;
}

/* Barra de herramientas */
.toolbar {
  background-color: #1db954;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

/* Contenido */
.content {
  background-color: #121212;
  color: white;
  padding: 20px;
}

/* Listado */
.list {
  padding: 10px;
}


/* Títulos */
label h2 {
  font-size: 18px;
  font-weight: bold;
}

/* Información de lanzamiento */
.release-info {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.release-info span {
  margin-left: 8px;
  font-weight: 500;
}

/* Fecha de lanzamiento */
.release-date {
  font-size: 12px;
  color: #b3b3b3;
  margin-top: 0;
}

/* Tipo de lanzamiento */
.release-type {
  background-color: rgba(29, 185, 84, 0.2);
  color: #1db954;
  height: 20px;
  font-size: 10px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Botones */
.buttons-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.button {
  background-color: transparent;
  color: #1db954;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
  border: 2px solid #1db954;
  margin-right: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: #1db954;
  color: black;
}

.spinner {
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.text-center {
  text-align: center;
}

</style>