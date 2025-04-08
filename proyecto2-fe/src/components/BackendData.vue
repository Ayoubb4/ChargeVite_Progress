<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBackendData } from '@/apiData/server';
import type { BackendResponse } from '@/types/backend';

const backendData = ref<string>('');
const errorMessage = ref<string | null>(null);

onMounted(async () => {
  try {
    const data: BackendResponse = await getBackendData();
    backendData.value = data.message;
    errorMessage.value = null;
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Hubo un error al cargar los datos del backend.';
  }
});
</script>

<template>
  <div>
    <h1>Backend Data</h1>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <p v-else>{{ backendData }}</p>
  </div>
</template>



<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: white;
  margin: 0;
  padding: 0;
}

.toolbar {
  background-color: #1db954;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

.content {
  background-color: #121212;
  color: white;
  padding: 20px;
}

.list {
  padding: 10px;
}


label h2 {
  font-size: 18px;
  font-weight: bold;
}

.release-info {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.release-info span {
  margin-left: 8px;
  font-weight: 500;
}

.release-date {
  font-size: 12px;
  color: #b3b3b3;
  margin-top: 0;
}

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