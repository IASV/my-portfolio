<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="image" />
    <div class="info">
      <h1>Sobre Mi</h1>
      <p>
        Soy un apasionado desarrollador de software con habilidades en varios
        lenguajes, tecnologías y frameworks.
      </p>
      <p>
        Creo en el poder de la programación para crear soluciones innovadoras y
        estoy constantemente buscando mejorar y aprender cosas nuevas. Mi pasión
        y dedicación pueden ser de gran valor para enfrentar nuevos retos.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--theme-color-dark-blue);
  display: flex;
  gap: 0px;
  width: 100%;
}

.image {
  background-image: url('../assets/helado.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.2;
  width: 50%;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  padding: 40px 50px;
}

.info h1 {
  color: var(--theme-color-white);
  font-family: Nunito;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.info p {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
