<script setup lang="ts">
import {
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-vue';
</script>
<template>
  <div class="container">
    <span>iasuarez.dev</span>
    <div class="socials">
      <a href="https://www.linkedin.com/in/iasuarez/" target="_blank">
        <IconBrandLinkedin color="white" stroke-width="1.5" :size="25" />
      </a>
      <a href="https://github.com/IASV" target="_blank">
        <IconBrandGithub color="white" stroke-width="1.5" :size="25" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
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
</style>
