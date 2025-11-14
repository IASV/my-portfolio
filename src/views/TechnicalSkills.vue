<script setup lang="ts">
interface TechCategory {
  category: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  subItems?: string[];
}

const technicalSkills: TechCategory[] = [
  {
    category: 'Python',
    items: [
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: 'Flask' },
    ],
  },
  {
    category: 'JavaScript / TypeScript',
    items: [
      { name: 'Vue' },
      { name: 'Svelte' },
      { name: 'React' },
      {
        name: 'React Native',
        subItems: ['Expo'],
      },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Architectures',
    items: [
      { name: 'Clean' },
      { name: 'Atomic Design' },
    ],
  },
  {
    category: 'DevOps',
    items: [
      {
        name: 'Linux',
        subItems: ['Debian', 'Ubuntu', 'Fedora'],
      },
      { name: 'Git' },
      {
        name: 'GitHub',
        subItems: ['Version Control', 'Actions'],
      },
      { name: 'Bitbucket' },
      { name: 'Docker' },
      { name: 'Vercel' },
      {
        name: 'AWS',
        subItems: ['Lambda', 'S3'],
      },
    ],
  },
];
</script>

<template>
  <div class="container" id="technical">
    <div class="content">
      <h1>Habilidades Técnicas</h1>
      <div class="tech-grid">
        <div
          v-for="category in technicalSkills"
          :key="category.category"
          class="tech-category"
        >
          <h2>{{ category.category }}</h2>
          <div class="tech-items">
            <div v-for="item in category.items" :key="item.name" class="tech-item">
              <span class="item-name">{{ item.name }}</span>
              <div v-if="item.subItems" class="sub-items">
                <span
                  v-for="subItem in item.subItems"
                  :key="subItem"
                  class="sub-item"
                >
                  {{ subItem }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--theme-color-dark-blue);
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  width: 100%;
}

.tech-category {
  background-color: var(--theme-color-dark);
  border: 5px solid var(--theme-color-dark);
  border-radius: 15px;
  padding: 25px;
  transition-duration: 0.3s;
  user-select: none;
}

.tech-category:hover {
  border-color: var(--theme-color-blue);
  transform: scale(1.05);
}

.tech-category h2 {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.item-name {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.sub-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 15px;
}

.sub-item {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 12px;
  background-color: var(--theme-color-dark-blue);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .container {
    padding: 60px 15px;
  }

  .content {
    gap: 35px;
  }

  .content h1 {
    font-size: 36px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tech-category {
    padding: 20px;
  }

  .tech-category:hover {
    transform: scale(1.01);
  }

  .tech-category h2 {
    font-size: 22px;
  }

  .item-name {
    font-size: 15px;
  }

  .sub-items {
    margin-left: 10px;
  }

  .sub-item {
    font-size: 13px;
    padding: 3px 10px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 40px 10px;
  }

  .content h1 {
    font-size: 32px;
  }

  .tech-category {
    padding: 18px;
  }

  .tech-category h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .item-name {
    font-size: 14px;
  }

  .sub-item {
    font-size: 12px;
    padding: 3px 8px;
  }
}
</style>

