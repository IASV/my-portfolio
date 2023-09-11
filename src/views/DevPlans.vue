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
];
</script>
<template>
  <div class="container">
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
}
</style>
