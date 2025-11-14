<script setup lang="ts">
import CardProject from '@/components/projects/CardProject.vue';
import TagProject from '@/components/projects/TagProject.vue';
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandAws,
  IconDatabase,
} from '@tabler/icons-vue';

interface IProject {
  label?: string;
  text?: string;
  link?: string;
  ghLink?: string;
  image?: string;
}

const projects: IProject[] = [
  {
    label: 'QR Attendance',
    text: 'Desarrollo de una app mobile para el control de asistencia usando QR en la cual se utilizan tecnologías como React Native, Expo, MongoDB, Vercel, TypeScript, Python y FastAPI.',
    link: '#',
    ghLink: '#',
    image: '../../assets/helado.jpeg',
  },
  {
    label: 'Mis Facturas',
    text: 'Desarrollo de una app mobile para la gestión de los gastos personales en la cual se utilizan tecnologías como React Native, Expo, MongoDB, AWS S3, TypeScript, Python y FastAPI.',
    link: '#',
    ghLink: '#',
    image: '../../assets/helado.jpeg',
  },
];
</script>
<template>
  <div class="content" id="projects">
    <h1>Proyectos</h1>
    <div class="projects-grid">
      <CardProject
        :label="projects[0].label"
        :text="projects[0].text"
        :link="projects[0].link"
        :gh-link="projects[0].ghLink"
      >
        <template v-slot:image>
          <img src="../assets/helado.jpeg" alt="QR Attendance" />
        </template>
        <template v-slot:tags>
          <TagProject label="React Native">
            <IconBrandReact stroke-width="1.5" />
          </TagProject>
          <TagProject label="TypeScript">
            <IconBrandTypescript stroke-width="1.5" />
          </TagProject>
          <TagProject label="Python">
            <IconBrandPython stroke-width="1.5" />
          </TagProject>
          <TagProject label="MongoDB">
            <IconDatabase stroke-width="1.5" />
          </TagProject>
        </template>
      </CardProject>
      <CardProject
        :label="projects[1].label"
        :text="projects[1].text"
        :link="projects[1].link"
        :gh-link="projects[1].ghLink"
      >
        <template v-slot:image>
          <img src="../assets/helado.jpeg" alt="Mis Facturas" />
        </template>
        <template v-slot:tags>
          <TagProject label="React Native">
            <IconBrandReact stroke-width="1.5" />
          </TagProject>
          <TagProject label="TypeScript">
            <IconBrandTypescript stroke-width="1.5" />
          </TagProject>
          <TagProject label="Python">
            <IconBrandPython stroke-width="1.5" />
          </TagProject>
          <TagProject label="AWS">
            <IconBrandAws stroke-width="1.5" />
          </TagProject>
        </template>
      </CardProject>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: var(--theme-color-dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 100px 0px;
}

.content h1 {
  margin-bottom: 50px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
}
</style>
