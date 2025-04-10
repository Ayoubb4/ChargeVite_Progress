<template>
  <div id="app">
    <Formulario />
  </div>
</template>

<script setup lang="ts">
import Formulario from "@/components/Formulario.vue";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: #f4f4f4;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#app {
  animation: fadeIn 1s ease-in-out;
}
</style>
