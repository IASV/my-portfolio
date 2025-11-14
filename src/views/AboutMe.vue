<script setup lang="ts"></script>
<template>
  <div class="container" id="about">
    <div class="content">
      <div class="image" />
      <div class="info">
        <h1>Sobre Mi</h1>
        <p>
          Ingeniero de sistemas y apasionado desarrollador de software con +3
          años de experiencia como Mobile Tech Lead, desarrollador Backend y FullStack, con
          habilidades y conocimientos en varios lenguajes, tecnologías y frameworks.
        </p>
        <p>
          Creo en el poder de la programación para crear soluciones innovadoras
          y estoy constantemente buscando mejorar y aprender cosas nuevas. Mi
          pasión y dedicación pueden ser de gran valor para enfrentar nuevos
          retos.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--theme-color-dark);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
}

.container .content {
  background-color: var(--theme-color-dark-blue);
  display: flex;
  gap: 0px;
  max-width: 800px;
  border-radius: 15px;
  border: 5px solid var(--theme-color-dark);
  overflow: hidden;
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;
  user-select: none;
}

.container .content:hover {
  border-color: var(--theme-color-blue);
  transform: scale(1.1);
}

.image {
  background-image: url('../assets/helado.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.05;
  width: 100%;
  height: 100%;
  position: absolute;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
