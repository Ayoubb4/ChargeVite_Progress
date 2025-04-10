<template>
  <div id="app">
    <Formulario />
  </div>
</template>

<script setup lang="ts">
import Formulario from "@/components/Formulario.vue";
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-in-out;
}
</style>
