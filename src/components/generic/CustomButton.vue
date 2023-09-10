<script setup lang="ts">
defineProps<{
  label?: string;
  onPress?: Function;
}>();

const noOnPress = () => console.log('button');
</script>
<template>
  <button @click="onPress ? onPress : noOnPress">{{ label }}</button>
</template>

<style scoped>
button {
  outline: none;
  border: none;
  background-color: var(--theme-color-blue);
  color: var(--theme-color-white);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.25s;
}

button:hover {
  background-color: var(--theme-color-dark-blue);
}
</style>
