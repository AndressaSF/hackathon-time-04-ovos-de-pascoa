<template>
  <v-app>
    <BarraMenu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import BarraMenu from './shared/BarraMenu.vue';

export default {
  name: 'App',
  components: { BarraMenu },
};
</script>