<script setup lang="ts">
import CustomButton from '@/components/generic/CustomButton.vue';
</script>
<template>
  <div class="container">
    <span>iasuarez.dev</span>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#about">Sobre mi</a></li>
      <li><a href="#exp">Experiencia</a></li>
      <li><a href="#">Proyectos</a></li>
      <li><a href="#">Habilidades</a></li>
      <li><a href="#">Contacto</a></li>
      <li><CustomButton label="Compra un plan" link="#plans"/></li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  padding-right: 5px;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.container span {
  font-size: 18px;
  font-weight: 600;
}

ul {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
  flex-wrap: wrap;
}

ul li a {
  text-decoration: none;
  color: var(--theme-color-white);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
  }

  ul {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    text-align: center;
  }

  ul li {
    width: 100%;
  }
}
</style>
