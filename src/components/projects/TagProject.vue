<script setup lang="ts">
import { IconBrandDjango } from '@tabler/icons-vue';
import { IconBrandMongodb } from '@tabler/icons-vue';
import { IconBrandSvelte } from '@tabler/icons-vue';
import { IconBrandReactNative } from '@tabler/icons-vue';
import { IconCloudCog } from '@tabler/icons-vue';
import { IconBrandDebian } from '@tabler/icons-vue';
import { IconGitBranch } from '@tabler/icons-vue';
import { IconBrandBitbucket } from '@tabler/icons-vue';
import { IconLambda } from '@tabler/icons-vue';
import { IconHammer } from '@tabler/icons-vue';
import { IconBucket } from '@tabler/icons-vue';
import { IconBrandAws } from '@tabler/icons-vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconBrandUbuntu } from '@tabler/icons-vue';
import { IconSettings } from '@tabler/icons-vue';
import { IconDeviceMobile } from '@tabler/icons-vue';
import { IconBrandReact } from '@tabler/icons-vue';
import { IconBrandMysql } from '@tabler/icons-vue';
import { IconDatabase } from '@tabler/icons-vue';
import { IconBrandJavascript } from '@tabler/icons-vue';
import {
  IconBrandDocker,
  IconBrandVue,
  IconBrandTypescript,
  IconBrandPython,
} from '@tabler/icons-vue';

interface ITagsIcons {
  python: Function;
  vue: Function;
  javaScript: Function;
  typeScript: Function;
  docker: Function;
  django: Function;
  database: Function;
  mongoDB: Function;
  mySQL: Function;
  svelte: Function;
  react: Function;
  reactNative: Function;
  mobile: Function;
  cloud: Function;
  setting: Function;
  debian: Function;
  ubuntu: Function;
  git: Function;
  gitHub: Function;
  bitbucket: Function;
  aws: Function;
  lambda: Function;
  s3: Function;
  hammer: Function;
}

const TAGSICONS: ITagsIcons = {
  python: IconBrandPython,
  vue: IconBrandVue,
  javaScript: IconBrandJavascript,
  typeScript: IconBrandTypescript,
  docker: IconBrandDocker,
  django: IconBrandDjango,
  database: IconDatabase,
  mongoDB: IconBrandMongodb,
  mySQL: IconBrandMysql,
  svelte: IconBrandSvelte,
  react: IconBrandReact,
  reactNative: IconBrandReactNative,
  mobile: IconDeviceMobile,
  cloud: IconCloudCog,
  setting: IconSettings,
  debian: IconBrandDebian,
  ubuntu: IconBrandUbuntu,
  git: IconGitBranch,
  gitHub: IconBrandGithub,
  bitbucket: IconBrandBitbucket,
  aws: IconBrandAws,
  lambda: IconLambda,
  s3: IconBucket,
  hammer: IconHammer,
};

defineProps<{
  label?: string;
  icon: ITagsIcons;
}>();
</script>
<template>
  <div class="containerTag">
    {{ TAGSICONS[icon] }}
    <h5>{{ label }}</h5>
  </div>
</template>

<style scoped>
.containerTag {
  background-color: var(--theme-color-dark-blue);
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 5px 15px;
  border-radius: 5px;
  width: fit-content;
  justify-content: center;
  align-items: center;
}
</style>
