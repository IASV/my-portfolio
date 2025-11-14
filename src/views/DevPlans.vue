<script setup lang="ts">
import CardPlan from '@/components/devPlans/CardPlan.vue';

interface IPlan {
  label?: string;
  text?: string;
  value?: number;
  isHour?: boolean;
  textPromotion?: string;
  items?: {
    label?: string;
    isEnabled?: boolean;
    subItems?: string[];
  }[];
}

const plans: IPlan[] = [
  {
    label: 'Premium',
    text: 'El paquete perfecto para webs personales',
    value: 200,
    isHour: false,
    textPromotion: '+1 mes de soporte gratis',
    items: [
      {
        label: 'Diseño y/o desarrollo de página web',
        isEnabled: true,
        subItems: [
          'Encabezado',
          'Cuerpo',
          'Enlaces',
          'Imágenes y Multimedia',
          'Pie de página',
          'Elementos de diseño y estilo',
          'Formularios',
          'Texto descriptivo',
          'Metaetiquetas',
        ],
      },
      {
        label: 'Interactividad avanzada',
        isEnabled: true,
        subItems: [
          'Diseño responsivo',
          'Animaciones y Transiciones',
          'Incorporación de Redes Sociales',
        ],
      },
      {
        label: 'Administración del sitio web',
        isEnabled: false,
        subItems: [
          'Búsqueda Avanzada',
          'Base de Datos y Almacenamiento de Datos',
          'Inicios de Sesión de Usuario',
          'Blogs y Comentarios',
          'Seguridad SSL y SQL',
          'Optimización de Posicionamiento (SEO)',
          'Analítica Web',
          'Contenido Dinámico',
          'Integración de Terceros',
        ],
      },
    ],
  },
  {
    label: 'Business',
    text: 'Optimizado para negocios medianos y pequeños',
    value: 600,
    isHour: false,
    textPromotion: '+2 mes de soporte gratis',
    items: [
      {
        label: 'Diseño y/o desarrollo de página web',
        isEnabled: true,
        subItems: [
          'Encabezado',
          'Cuerpo',
          'Enlaces',
          'Imágenes y Multimedia',
          'Pie de página',
          'Elementos de diseño y estilo',
          'Formularios',
          'Texto descriptivo',
          'Metaetiquetas',
        ],
      },
      {
        label: 'Interactividad avanzada',
        isEnabled: true,
        subItems: [
          'Diseño responsivo',
          'Animaciones y Transiciones',
          'Incorporación de Redes Sociales',
        ],
      },
      {
        label: 'Administración del sitio web',
        isEnabled: true,
        subItems: [
          'Búsqueda Avanzada',
          'Base de Datos y Almacenamiento de Datos',
          'Inicios de Sesión de Usuario',
          'Blogs y Comentarios',
          'Seguridad SSL y SQL',
          'Optimización de Posicionamiento (SEO)',
          'Analítica Web',
          'Contenido Dinámico',
          'Integración de Terceros',
        ],
      },
    ],
  },
  {
    label: 'Personalizado',
    text: 'Contrata a tu programador por horas',
    value: 8,
    isHour: true,
    textPromotion: '+Alcances del plan business',
    items: [
      {
        label: 'App Mobile',
        isEnabled: true,
        subItems: [
          'Use de Ract Native',
          'Uso de Expó',
          'Actualización de AppÞ',
          'Empaquetados iOS y Android',
          'Despliegue de App a TestFlight en AppStore',
        ],
      },
      {
        label: 'Implementación de Arquitecturas',
        isEnabled: true,
        subItems: [
          'Concepto de Clean Architecture',
          'Uso de Atomic Design',
          'TDD en Python con PyTest',
        ],
      },
      {
        label: 'Infraestructura simple',
        isEnabled: true,
        subItems: [
          'Serverless con AWS Lambda y FastAPI',
          'Almacenamiento de datos con AWS S3',
          'CI y CD',
          'Automatización de despligues con GitHub Actions',
          'Docker y Docker Compose',
          'Manejo de entornos linux con Debian y Ubuntu',
          'Control de versiones con Git y GitHub',
          'API Rest con FastAPI',
          'Integración de SMTP con Brevo CRM',
          'Uso de Firebase para alojamiento del Frontend',
        ],
      },
    ],
  },
];
</script>
<template>
  <div class="container" id="plans">
    <h1>Planes de desarrollo</h1>
    <div class="plans">
      <CardPlan
        v-for="plan in plans"
        :label="plan.label"
        :text="plan.text"
        :value="plan.value"
        :is-hour="plan.isHour"
        :text-promotion="plan.textPromotion"
        :items="plan.items"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--theme-color-dark-blue);
  padding-horizontal: 10px;
  padding-top: 50px;
  padding-bottom: 10px;
}

.container h1 {
  font-size: 44px;
}

.container .plans {
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  max-width: 1200px;
}

@media (max-width: 1200px) {
  .container .plans {
    gap: 30px;
  }
}

@media (max-width: 768px) {

  .container h1 {
    font-size: 36px;
  }

  .container .plans {
    margin-top: 35px;
    margin-bottom: 60px;
    gap: 25px;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 40px 10px;
  }

  .container h1 {
    font-size: 32px;
  }

  .container .plans {
    margin-top: 25px;
    margin-bottom: 40px;
    gap: 20px;
    width: 100%;
  }
}
</style>
