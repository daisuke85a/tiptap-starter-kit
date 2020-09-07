<template>
  <div id="app">
    <navigation />
    <hero />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/basic">Basic</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/index.vue';
import Hero from '@/components/Hero/index.vue';

export default {
  components: {
    Navigation,
    Hero,
  },
};
</script>
