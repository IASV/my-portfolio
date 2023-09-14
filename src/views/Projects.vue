<script setup lang="ts">
import CardProject from '@/components/projects/CardProject.vue';
import TagProject from '@/components/projects/TagProject.vue';
import {
  IconBrandDocker,
  IconBrandVue,
  IconBrandTypescript,
  IconBrandPython,
} from '@tabler/icons-vue';

interface IPorject {
  label?: string;
  text?: string;
  link?: string;
  ghLink?: string;
  image?: string;
}

const projects: IPorject[] = [
  {
    label: 'Nombre de proyecto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    link: 'google.com',
    ghLink: 'google.com',
    image: '../../assets/helado.jpeg',
  },
];
</script>
<template>
  <div class="content">
    <h1>Proyectos</h1>
    <CardProject
      :label="projects[0].label"
      :text="projects[0].text"
      :link="projects[0].link"
      :gh-link="projects[0].ghLink"
    >
      <template v-slot:image>
        <img src="../assets/helado.jpeg" alt="image" />
      </template>
      <template v-slot:tags>
        <TagProject label="Python">
          <IconBrandPython stroke-width="1.5" />
        </TagProject>
        <TagProject label="TypeScript">
          <IconBrandTypescript stroke-width="1.5" />
        </TagProject>
        <TagProject label="Vue">
          <IconBrandVue stroke-width="1.5" />
        </TagProject>
        <TagProject label="Docker">
          <IconBrandDocker stroke-width="1.5" />
        </TagProject>
      </template>
    </CardProject>
  </div>
</template>

<style scoped>
.content {
  background-color: var(--theme-color-dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
