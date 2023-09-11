<script setup lang="ts">
defineProps<{
  label?: string;
  onPress?: Function;
  link?: string;
}>();

const noOnPress = () => console.log('button');
</script>
<template>
  <a :href="link" @click="onPress ? onPress : noOnPress"> {{ label }} </a>
</template>

<style scoped>
a {
  outline: none;
  border: none;
  background-color: var(--theme-color-blue);
  color: var(--theme-color-white);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.25s;
  text-decoration: none;
  user-select: none;
}

a:hover {
  background-color: var(--theme-color-dark-blue);
}
</style>
