<script setup lang="ts">
import {
  IconCircleCheck,
  IconCircleX,
  IconChevronRight,
} from '@tabler/icons-vue';
import { NCollapse, NCollapseItem } from 'naive-ui';
import CustomButton from '@/components/generic/CustomButton.vue';

interface IItem {
  label?: string;
  isEnabled?: boolean;
  subItems?: string[];
}

defineProps<{
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
}>();
</script>
<template>
  <div class="container">
    <h1 class="label">{{ label }}</h1>
    <span class="text">{{ text }}</span>

    <div class="value">
      <span>USD</span>
      <h1 class="price">${{ value?.toString() }}</h1>
      <span style="font-weight: 500;" v-if="isHour">/hora</span>
    </div>
    <span class="textPromotion">{{ textPromotion }}</span>
    <CustomButton label="Comprar este plan" />

    <div class="items">
      <span>Alcance del desarrollo</span>
      <div class="options" >
        <n-collapse v-for="item in items" style="margin-bottom: 20px;">
          <template #header-extra>
            <div class="isEnabled">
              <IconCircleCheck v-if="item.isEnabled" color="green" :size="18" />
              <IconCircleX v-if="!item.isEnabled" color="#FF5959" :size="18" />
            </div>
          </template>
          <template #arrow>
            <IconChevronRight color="white" :size="18"/>
          </template>
          <n-collapse-item :title="item.label" name="1">
            <ul>
              <li v-for="subItem in item.subItems">
                {{ subItem }}
              </li>
            </ul>
          </n-collapse-item>
        </n-collapse>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start !important;
  text-align: center;
  background-color: var(--theme-color-dark) !important;
  border-radius: 15px;
  padding: 10px;
  padding-top: 40px;
  gap: 5px;
  transition-duration: 0.25s;
  width: 365px;
  user-select: none;
}

.container:hover {
  transform: scale(1.1);
}

.container .label {
  color: var(--theme-color-dark-gray);
  text-align: center;
  font-family: Nunito;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
}

.container .text {
  color: var(--theme-color-white);
  text-align: center;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 25px;
}

.container .value {
  display: flex;
  flex-direction: row;
  align-items: first baseline;
}

.container .value span {
  color: var(--theme-color-gray);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.container .value .price {
  color: var(--theme-color-dark-gray);
  text-align: center;
  font-family: Inter;
  font-size: 54px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.container .textPromotion {
  color: var(--theme-color-light-blue);
  text-align: center;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
}

.items {
  display: flex;
  flex-direction: column;
  background-color: var(--theme-color-dark-blue);
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 30px;
  gap: 10px;
  width: 100%;
}

.items span {
  color: var(--theme-color-white);
  text-align: center;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.items .options {
  margin-top: 15px;
}

.items .options ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--theme-color-white);
}

.items .options ul li {
  text-align: left;
}

.items .options .isEnabled {
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
