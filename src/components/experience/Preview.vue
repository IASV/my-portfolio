<script setup lang="ts">
import { IconChevronRight } from '@tabler/icons-vue';
import { NCollapse, NCollapseItem } from 'naive-ui';

defineProps<{
  job?: string;
  date?: string;
  business?: string;
  location?: string;
  items?: string[];
}>();
</script>
<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <h1>{{ job }}</h1>
        <span>{{ date }}</span>
      </div>
      <div class="right">
        <h1>{{ business }}</h1>
        <span>{{ location }}</span>
      </div>
    </div>
    <div class="content">
      <n-collapse style="margin-bottom: 20px">
        <template #arrow>
          <IconChevronRight color="white" :size="18" />
        </template>
        <n-collapse-item title="Logros/Funciones" name="1">
          <ul>
            <li v-for="item in items">
              {{ item }}
            </li>
          </ul>
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 800px;
  border: 5px solid var(--theme-color-dark);
  padding: 15px 20px;
  border-radius: 15px;
  user-select: none;
  transition-duration: 0.3s;
}

.container:hover {
  border-color: var(--theme-color-blue);
  transform: scale(1.1);
}

.header {
  display: flex;
  justify-content: space-between;
}

.header .right {
  text-align: right;
}

.header .left h1 {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.header .right h1 {
  color: var(--theme-color-dark-gray);
  text-align: right;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.header span {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.container .content ul li {
  color: var(--theme-color-gray);
  text-align: left;
  font-size: 16px;
}
</style>
