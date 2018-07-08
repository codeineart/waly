<template>
  <div>
    <v-app light>
      <AppNav></AppNav>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import AppNav from '@/partials/AppNav'
export default {
  name: 'app',
  data: () => ({
    title: 'Your Lo go',
  }),
  created() {},
  components: {
    AppNav
  }
};
</script>

<style lang="scss">
</style>
