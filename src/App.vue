<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import Header from '@/components/core/Header.vue';
import Footer from '@/components/core/Footer.vue';
import { darkTheme } from 'naive-ui';
import type { GlobalTheme } from 'naive-ui';
import { NConfigProvider } from 'naive-ui'

const theme = ref<GlobalTheme | null>(darkTheme);
</script>

<template>
  <Header />
  <n-config-provider :theme="theme">
    <RouterView />
  </n-config-provider>
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');
</style>
