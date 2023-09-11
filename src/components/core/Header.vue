<script setup lang="ts">
import CustomButton from '@/components/generic/CustomButton.vue';
</script>
<template>
  <div class="container">
    <span>iasuarez.dev</span>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre mi</a></li>
      <li><a href="#">Experiencia</a></li>
      <li><a href="#">Proyectos</a></li>
      <li><a href="#">Habilidades</a></li>
      <li><a href="#">Contacto</a></li>
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

ul li a {
  text-decoration: none;
  color: var(--theme-color-white);
}
</style>
