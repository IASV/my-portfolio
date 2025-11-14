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
      <h3>Mobile Tech Lead & Desarrollador de software</h3>
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
  gap: 50px;
  padding: 20px;
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
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
    min-height: 60vh;
    gap: 30px;
    padding: 40px 20px;
  }

  .info {
    text-align: center;
    align-items: center;
  }

  .info h1 {
    font-size: 40px;
  }

  .info h3 {
    font-size: 18px;
  }

  .info span {
    max-width: 300px;
  }

  .image {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .info h1 {
    font-size: 32px;
  }

  .info h3 {
    font-size: 16px;
  }

  .info span {
    font-size: 13px;
  }

  .image {
    width: 150px;
    height: 150px;
  }
}
</style>
