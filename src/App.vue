<template>
  <div>
    <v-app light>
      <AppNav></AppNav>
      <router-view></router-view>
      <AppFooter></AppFooter>
    </v-app>
  </div>
</template>

<script>
import AppNav from '@/partials/AppNav'
import AppFooter from '@/partials/AppFooter'
export default {
  name: 'app',
  data: () => ({
    title: 'Your Lo go',
  }),
  created() {},
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style lang="scss">
</style>
