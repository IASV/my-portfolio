<script setup lang="ts">
import { IconChevronRight } from '@tabler/icons-vue';
import { NCollapse, NCollapseItem } from 'naive-ui';

interface Position {
  job: string;
  date: string;
  items: string[];
}

defineProps<{
  job?: string;
  date?: string;
  business?: string;
  location?: string;
  items?: string[];
  positions?: Position[];
}>();
</script>
<template>
  <div class="container">
    <!-- Para experiencias con múltiples posiciones (ascensos) -->
    <div v-if="positions">
      <div class="header-with-positions">
        <div class="positions-container">
          <div v-for="(position, index) in positions" :key="index" class="position-step">
            <div class="position-header">
              <div class="step-indicator">
                <div class="step-dot"></div>
                <div v-if="index < positions.length - 1" class="step-line"></div>
              </div>
              <div class="position-info">
                <h2>{{ position.job }}</h2>
                <span class="position-date">{{ position.date }}</span>
                <div class="position-content">
                  <n-collapse style="margin-top: 10px">
                    <template #arrow>
                      <IconChevronRight color="white" :size="18" />
                    </template>
                    <n-collapse-item title="Logros/Funciones" :name="String(index)">
                      <ul>
                        <li v-for="item in position.items" :key="item">
                          {{ item }}
                        </li>
                      </ul>
                    </n-collapse-item>
                  </n-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right desktop-only">
          <h1>{{ business }}</h1>
          <span>{{ location }}</span>
        </div>
      </div>
      <div class="company-info mobile-only">
        <h1>{{ business }}</h1>
        <span>{{ location }}</span>
      </div>
    </div>
    
    <!-- Para experiencias simples -->
    <div v-else>
      <div class="header">
        <div class="left">
          <h1>{{ job }}</h1>
          <span>{{ date }}</span>
        </div>
        <div class="right desktop-only">
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
              <li v-for="item in items" :key="item">
                {{ item }}
              </li>
            </ul>
          </n-collapse-item>
        </n-collapse>
      </div>
      <div class="company-info mobile-only">
        <h1>{{ business }}</h1>
        <span>{{ location }}</span>
      </div>
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

.header-with-positions {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header-with-positions .right {
  text-align: right;
  margin-top: 5px;
}

.header-with-positions .right h1 {
  color: var(--theme-color-dark-gray);
  text-align: right;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.header-with-positions .right span {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.positions-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
}

.position-step {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  min-height: 140px;
}

.position-step:last-child {
  min-height: auto;
}

.position-header {
  display: flex;
  gap: 0px;
  align-items: flex-start;
  position: relative;
}

.step-indicator {
  position: absolute;
  left: -31.01px;
  top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.step-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--theme-color-blue);
  border: 4px solid var(--theme-color-dark);
  z-index: 2;
  flex-shrink: 0;
}

.step-line {
  width: 5px;
  flex: 1;
  min-height: 100px;
  background-color: var(--theme-color-blue);
  margin-top: 8px;
}

.position-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  padding-left: 0px;
}

.position-info h2 {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.position-date {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.position-content {
  width: 100%;
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

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

.company-info {
  margin-top: 20px;
  padding-left: 0px;
}

.company-info h1 {
  color: var(--theme-color-dark-gray);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
}

.company-info span {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
}

@media (max-width: 900px) {
  .container {
    width: 95%;
    max-width: 700px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 15px 15px;
  }

  .container:hover {
    transform: scale(1.02);
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .header .left h1 {
    font-size: 22px;
  }

  .header span {
    font-size: 14px;
  }

  .position-info h2 {
    font-size: 22px;
  }

  .position-date {
    font-size: 14px;
  }

  .step-indicator {
    left: -20px;
  }

  .step-dot {
    width: 12px;
    height: 12px;
    border: 3px solid var(--theme-color-dark);
  }

  .step-line {
    width: 4px;
  }

  .container .content ul li {
    font-size: 14px;
  }

  .company-info {
    margin-top: 15px;
  }

  .company-info h1 {
    font-size: 20px;
  }

  .company-info span {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 12px 12px;
    border: 3px solid var(--theme-color-dark);
  }

  .container:hover {
    border-color: var(--theme-color-blue);
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .header-with-positions {
    flex-direction: column;
    gap: 15px;
  }

  .header .left h1,
  .position-info h2 {
    font-size: 20px;
  }

  .header span,
  .position-date {
    font-size: 13px;
  }

  .step-indicator {
    left: -15px;
  }

  .step-dot {
    width: 10px;
    height: 10px;
  }

  .step-line {
    width: 3px;
    min-height: 80px;
  }

  .position-step {
    min-height: 120px;
  }

  .container .content ul li {
    font-size: 13px;
  }

  .company-info {
    margin-top: 12px;
  }

  .company-info h1 {
    font-size: 18px;
  }

  .company-info span {
    font-size: 12px;
  }
}
</style>
