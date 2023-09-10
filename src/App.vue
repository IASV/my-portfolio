<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/core/Header.vue';
import Footer from '@/components/core/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');
</style>
