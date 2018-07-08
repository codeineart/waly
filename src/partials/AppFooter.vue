<template>
  <footer>
    <v-footer class="purple darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12 class="white--text text-xs-center">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          at
          <a class="white--text" href="https://angelhack.com/" target="_blank">AngelHacks</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({}),
  props: {
    source: String,
  },
};
</script>