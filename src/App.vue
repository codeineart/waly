<template>
  <div>
    <v-app light>
      <!-- HEADER -->
      <transition name="fade" mode="out-in">
        <AppNav v-if="show.toolbar"></AppNav>
      </transition>

      <!-- ROUTES VIEW -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <!-- HEADER -->
      <transition name="fade" mode="out-in">
        <AppFooter v-if="show.footer"></AppFooter>
      </transition>
    </v-app>
  </div>
</template>

<script>
import AppNav from '@/partials/AppNav';
import AppFooter from '@/partials/AppFooter';
export default {
  name: 'app',
  data: () => ({
    title: 'Your Lo go',
    show: {
      toolbar: true,
      footer: true,
    },
  }),
  methods: {
    clicked (value) {
      return value
    },
  },
  created() {
    console.log(this.clicked())
  },
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './assets/index.scss';

.fade-enter-active {
  transition: all 1.5s linear;
}
.fade-leave-active {
  transition: all 1.5s linear;
  opacity: 0;
}
</style>
