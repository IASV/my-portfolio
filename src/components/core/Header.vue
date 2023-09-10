<script setup lang="ts">
import CustomButton from '@/components/generic/CustomButton.vue';
</script>
<template>
  <div class="container">
    <span>iasuarez.dev</span>
    <ul>
      <li>Inicio</li>
      <li>Sobre mi</li>
      <li>Experiencia</li>
      <li>Proyectos</li>
      <li>Habilidades</li>
      <li>Contacto</li>
      <li><CustomButton label="Compra un plan" /></li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
}
</style>
