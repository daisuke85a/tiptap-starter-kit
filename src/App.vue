<template>
  <div id="app">
    <navigation />
    <hero />
    <subnavigation />
    <div class="page__content">
      <router-view/>
    </div>
    <div class="page__footer">
      <a class="page__source-link" :href="$route.meta.githubUrl" target="_blank">
        <icon name="code" />
        <span>
          Show Code
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/index.vue';
import Hero from '@/components/Hero/index.vue';
import Subnavigation from '@/components/Subnavigation/index.vue';
import Icon from '@/components/Icon/index.vue';

export default {
  components: {
    Navigation,
    Hero,
    Subnavigation,
    Icon,
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
