<script setup lang="ts">
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileDownload,
} from '@tabler/icons-vue';
</script>
<template>
  <div class="container">
    <div class="info">
      <h1>
        Hola, Soy <br />
        Iván Suarez
      </h1>
      <h3>Desarrollador de software</h3>
      <span
        >Mi pasión por programar se refleja en cada línea de código que
        escribo.</span
      >
      <div class="socials">
        <a href="https://www.linkedin.com/in/iasuarez/" target="_blank">
          <IconBrandLinkedin color="white" stroke-width="1.5" :size="25" />
        </a>
        <a href="https://github.com/IASV" target="_blank">
          <IconBrandGithub color="white" stroke-width="1.5" :size="25" />
        </a>
        <a href="#">
          <IconFileDownload color="white" stroke-width="1.5" :size="25" />
        </a>
      </div>
    </div>
    <div class="image" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 50px
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.info h1 {
  font-size: 65px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
}

.info h3 {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 25px;
}

.info span {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  max-width: 350px;
}

.socials {
  display: flex;
  gap: 20px;
}

.socials a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 268px;
  height: 268px;
  border-radius: 100%;
  overflow: hidden;
  background-image: url('../assets/MyHD.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
