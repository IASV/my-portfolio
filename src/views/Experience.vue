<script setup lang="ts">
import Preview from '@/components/experience/Preview.vue';

interface Position {
  job: string;
  date: string;
  items: string[];
}

interface IExp {
  job?: string;
  date?: string;
  business?: string;
  location?: string;
  items?: string[];
  positions?: Position[];
}

const exps: IExp[] = [
  {
    business: 'OnStageObra',
    location: 'Santiago, Chile',
    positions: [
      {
        job: 'Mobile Tech Lead',
        date: '10/2025 - Presente',
        items: [
          'Lidero la dirección técnica y estratégica de los productos móviles.',
          'Aseguro el rendimiento, calidad y una experiencia de usuario excepcional.',
          'Gestión del equipo de desarrollo móvil y definición de arquitectura técnica.',
        ],
      },
      {
        job: 'Frontend & Mobile Developer',
        date: '01/2024 - 10/2025',
        items: [
          'Desarrollo e implementación de nuevas funcionalidades en entornos web y móviles utilizando React Native y JavaScript.',
          'Creación de interfaces modernas y optimización de rendimiento.',
          'Mantenimiento del código base del producto móvil principal.',
        ],
      },
    ],
  },
  {
    job: 'Back-end Developer',
    date: '07/2022 - Presente',
    business: 'MaluSoft',
    location: 'Aguachica, Colombia',
    items: [
      'Desarrollo de una API robusta para servicios de autenticación y control de usuarios.',
      'Implementación de gestión de archivos en un aplicativo WEB y Mobile para estadísticas de campañas electorales.',
      'Competencia en el uso de Python, FastAPI, AWS (Lambda, S3) y MongoDB para crear soluciones eficientes en el contexto electoral.',
    ],
  },
  {
    job: 'Frontend & Mobile Developer',
    date: '10/2023 - 12/2023',
    business: 'DevsafIA',
    location: 'Santiago, Chile',
    items: [
      'Desarrollo de nuevas funcionalidades usando React Native, Svelte, JavaScript y Python.',
      'Colaboración en proyectos de desarrollo frontend y móvil.',
      'Implementación de soluciones innovadoras en entornos ágiles.',
    ],
  },
  {
    job: 'Full-Stack Developer',
    date: '06/2023 - 10/2023',
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
    date: '06/2023 - 07/2023',
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
    date: '01/2023 - 06/2023',
    business: 'Boltzman Agency',
    location: 'Bogotá, Colombia',
    items: [
      'Desarrollo de un entorno completo de gestión de usuarios.',
      'Recuperación y puesta en marcha de una app mobile obsoleta con nuevas funcionalidades.',
      'Creación de un aplicativo web para mejor control y gestión usando React Native, Expo, Vue 3, TypeScript, Python, FastAPI, MongoDB, GitHub Actions, Firebase y AWS (Lambda).',
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
    business: 'Developers GO',
    location: 'Bogotá, Colombia',
    items: [
      'Desarrollo de un aplicativo para administrar contenido dinámico de páginas web.',
      'Competencia en el uso de TypeScript, Vue 3, MongoDB, Python, FastAPI y AWS (Lambda).',
      'Creación de soluciones integrales para la gestión de contenido en sitios web.',
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
      :positions="exp.positions"
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

@media (max-width: 768px) {
  .content {
    padding: 60px 15px;
  }

  .content .label {
    margin-bottom: 35px;
    font-size: 36px;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 40px 10px;
  }

  .content .label {
    margin-bottom: 25px;
    font-size: 32px;
  }
}
</style>
