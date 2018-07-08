<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <transition name="fade">
            <h1 v-if="runAnimations">Hola,</h1>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Recycle',
  data: () => ({
    runAnimations: false,
  }),
  props: {
    source: String,
  },
  mounted() {
    let _vm = this;
    setTimeout(() => {
      _vm.runAnimations = true;
    }, 500);
  },
};
</script>

<style lang="scss">
h1 {
  font-weight: 200;
}
</style>

