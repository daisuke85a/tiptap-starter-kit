<template>
  <div id="app">
    <navigation />
    <hero />
    <subnavigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/index.vue';
import Hero from '@/components/Hero/index.vue';
import Subnavigation from '@/components/Subnavigation/index.vue';

export default {
  components: {
    Navigation,
    Hero,
    Subnavigation,
  },
};
</script>
