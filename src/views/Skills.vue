<script setup lang="ts">
const skills: string[] = [
  'Trabajo en equipo',
  'Aprendizaje rápido',
  'Creatividad',
  'Orden',
  'Flexibilidad',
  'Compromiso',
  'Aprendizaje independiente',
  'Resolución de problemas',
  'Adaptabilidad',
];
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Competencias</h1>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill" class="skill-card">
          <span>{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--theme-color-dark);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
}

.content h1 {
  color: var(--theme-color-white);
  font-family: Nunito;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

.skill-card {
  background-color: var(--theme-color-dark-blue);
  border: 5px solid var(--theme-color-dark);
  border-radius: 15px;
  padding: 25px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  cursor: pointer;
  user-select: none;
}

.skill-card:hover {
  border-color: var(--theme-color-blue);
  transform: scale(1.05);
}

.skill-card span {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
</style>

