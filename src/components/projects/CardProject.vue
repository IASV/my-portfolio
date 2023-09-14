<script setup lang="ts">
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-vue';

defineProps<{
  label?: string;
  text?: string;
  link?: string;
  ghLink?: string;
}>();
</script>
<template>
  <div class="container">
    <div class="image">
      <slot name="image" class="imgSlot"></slot>
    </div>
    <div class="info">
      <h2>{{ label }}</h2>
      <p>
        {{ text }}
      </p>
      <div class="tags">
        <slot name="tags"></slot>
      </div>
    </div>
    <div class="socials">
      <a :href="link" target="_blank">
        <IconBrandGithub color="white" stroke-width="1.5" :size="25" />
      </a>
      <a :href="ghLink" target="_blank">
        <IconExternalLink color="white" stroke-width="1.5" :size="25" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  gap: 20px;
}

.socials a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  background-color: var(--theme-color-dark);
  border-radius: 10px;
  overflow: hidden;
  border: 5px solid var(--theme-color-dark);
}

.container .info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
}

.container .info h2 {
  color: var(--theme-color-white);
  font-weight: bold;
}

.container .info p {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.container .socials {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  gap: 10px;
  padding: 10px;
}
</style>

<style>
.container .image img {
  max-width: 100%;
  height: auto;
  opacity: 0.6;
}

.container .tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
}
</style>
