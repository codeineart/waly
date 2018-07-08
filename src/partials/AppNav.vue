<template>
  <header>
    <!-- MENU DE NAVEGACIÓN -->
    <v-navigation-drawer class="drawer" v-model="drawer" app temporary>
      <v-list dense>

        <!-- MENÚ -->

        <!-- <v-list-tile @click="" v-for="label in labels" :key="label.title">
          <v-list-tile-action>
            <v-icon>calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Título</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

      </v-list>
    </v-navigation-drawer>
    <!-- TOOL BAR -->
    <v-toolbar class="" fixed app pl-3 pr-3>
      <v-icon :size="36" color="light-green">fa fa-leaf</v-icon>
      <v-toolbar-title> {{ title }} </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat @click="drawer= !drawer">
        <span style="margin-right:15px;">Abrir Menú</span>
        <v-icon flat mr-2>menu</v-icon>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'AppNav',
  data: () => ({
    drawer: false,
    title: 'Waly',
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
.navbar-component__ {
}
</style>
