<script setup lang="ts">
import Preview from '@/components/experience/Preview.vue';

interface IExp {
  job?: string;
  date?: string;
  business?: string;
  location?: string;
  items?: string[];
}

const exps: IExp[] = [
  {
    job: 'Full-Stack Developer',
    date: '06/2023 - Presente',
    business: 'Mootor Latam',
    location: 'Costa Rica',
    items: [
      'Desarrollo de nuevas funcionalidades como desarrollador full-stack.',
      'Dominio y uso de tecnologías como PHP, Laravel y Vue.',
      'Contribución al avance y mejora de la aplicación mediante las nuevas implementaciones.',
    ],
  },
  {
    job: 'Full-Stack Developer',
    date: '06/2023 - Presente',
    business: 'Ultrabox',
    location: 'Bogotá, Colombia',
    items: [
      'Creación de soluciones de software a medida.',
      'Competencia en el uso de TypeScript, Python, Svelte y Django.',
      'Experiencia en desarrollar soluciones de software personalizadas para satisfacer las necesidades del cliente.',
    ],
  },
  {
    job: 'Full-Stack Developer',
    date: '01/2023 - 06/2023',
    business: 'Boltzman Agency',
    location: 'Bogotá, Colombia',
    items: [
      'Actualización de una app mobile obsoleta con nuevas funcionalidades.',
      'Creación de un aplicativo web para mejorar la gestión de usuarios de una app mobile.',
      'Dominio en el uso de múltiples tecnologías.',
    ],
  },
  {
    job: 'Full-Stack Developer',
    date: '01/2023 - 04/2023',
    business: 'Ultrabox',
    location: 'Bogotá, Colombia',
    items: [
      'Desarrollo e implementación de soluciones frontend.',
      'Desarrollo e implementación de soluciones backend.',
      'Experiencia en el uso de TypeScript con React, NextJS, Vue 3, Python y Django.',
    ],
  },
  {
    job: 'Full-Stack Developer',
    date: '07/2022 - 09/2022',
    business: 'Developers Go',
    location: 'Bogotá, Colombia',
    items: [
      'Desarrollo de un aplicativo para administrar contenido dinámico de páginas web.',
      'Competencia en el uso de TypeScript, Vue 3, MongoDB, Python, FastAPI y AWS (Lambda).',
      'Creación de soluciones integrales para la gestión de contenido en sitios web.',
    ],
  },
  {
    job: 'Back-end Developer',
    date: '07/2022 - Presente',
    business: 'MaluSoft',
    location: 'Bogotá, Colombia',
    items: [
      'Desarrollo de una API robusta para servicios de autenticación y control de usuarios.',
      'Implementación de gestión de archivos en un aplicativo WEB y Mobile para estadísticas de campañas electorales.',
      'Competencia en el uso de Python, FastAPI, AWS (Lambda, S3) y MongoDB para crear soluciones eficientes en el contexto electoral.',
    ],
  },
];
</script>
<template>
  <div class="content" id="exp">
    <h1 class="label">Experiencia</h1>
    <Preview
      v-for="exp in exps"
      :job="exp.job"
      :date="exp.date"
      :business="exp.business"
      :location="exp.location"
      :items="exp.items"
    />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  gap: 20px;
}

.content .label {
  margin-bottom: 50px;
}
</style>
