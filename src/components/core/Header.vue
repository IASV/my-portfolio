<script setup lang="ts">
import CustomButton from '@/components/generic/CustomButton.vue';
import { IconMenu2, IconX } from '@tabler/icons-vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
<template>
  <div class="container">
    <span class="logo">iasuarez.dev</span>
    
    <!-- Menú Desktop -->
    <ul class="desktop-menu">
      <li><a href="#">Inicio</a></li>
      <li><a href="#about">Sobre mi</a></li>
      <li><a href="#exp">Experiencia</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#technical">Habilidades</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><CustomButton label="Compra un plan" link="#plans"/></li>
    </ul>

    <!-- Header Mobile (botón y hamburguesa) -->
    <div class="mobile-header">
      <CustomButton label="Compra un plan" link="#plans"/>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <IconMenu2 v-if="!isMenuOpen" :size="28" stroke-width="2" />
        <IconX v-else :size="28" stroke-width="2" />
      </button>
    </div>

    <!-- Menú Mobile Desplegable -->
    <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
      <ul>
        <li><a href="#" @click="closeMenu">Inicio</a></li>
        <li><a href="#about" @click="closeMenu">Sobre mi</a></li>
        <li><a href="#exp" @click="closeMenu">Experiencia</a></li>
        <li><a href="#projects" @click="closeMenu">Proyectos</a></li>
        <li><a href="#technical" @click="closeMenu">Habilidades</a></li>
        <li><a href="#contact" @click="closeMenu">Contacto</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  position: relative;
}

.desktop-menu {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
  flex-wrap: wrap;
}

.desktop-menu li a {
  text-decoration: none;
  color: var(--theme-color-white);
  transition: color 0.3s;
}

.desktop-menu li a:hover {
  color: var(--theme-color-blue);
}

.mobile-header {
  display: none;
}

.hamburger {
  background: none;
  border: none;
  color: var(--theme-color-white);
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

.hamburger:hover {
  color: var(--theme-color-blue);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--theme-color-dark-blue);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 1000;
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.mobile-menu ul li {
  width: 100%;
  border-bottom: 1px solid var(--theme-color-dark);
}

.mobile-menu ul li:last-child {
  border-bottom: none;
}

.mobile-menu ul li a {
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: var(--theme-color-white);
  transition: background-color 0.3s, color 0.3s;
}

.mobile-menu ul li a:hover {
  background-color: var(--theme-color-dark);
  color: var(--theme-color-blue);
}

@media (max-width: 768px) {
  .container {
    padding: 15px 15px;
  }

  .desktop-menu {
    display: none;
  }

  .mobile-header {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .mobile-menu {
    display: block;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 12px 12px;
  }

  .logo {
    font-size: 16px;
  }

  .mobile-header {
    gap: 10px;
  }

  .hamburger {
    padding: 3px;
  }
}
</style>
