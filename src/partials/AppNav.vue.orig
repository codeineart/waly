<template>
  <header class="navbar-component__">
    <!-- MENU DE NAVEGACIÓN -->
    <v-navigation-drawer class="drawer" v-model="drawer" app temporary>
      <v-list>

        <!-- LIST  -->
        <v-list-tile>
          <v-layout>
            <!-- <v-flex d-flex align-center justify-center> waly.io</v-flex> -->
            <v-flex d-flex align-baseline align-content-center=justify-center>
              <p style="margin: 0; ">
                <v-icon :size="24 " color="light-green">fa fa-leaf</v-icon>
                <span style="font-size:20px;align-self:center;margin-left:15px;">Ingresar</span>
              </p>
            </v-flex>
            <v-spacer></v-spacer>
            <v-icon class="close-icon" :size="32" @click="drawer = !drawer">close</v-icon>
          </v-layout>
        </v-list-tile>

        <v-divider></v-divider>

        <!-- LOGIN AREA -->
        <h3 class="text-xs-center ma-3 "></h3>
        <v-flex xs12 mx-3>
          <v-text-field placeholder="Usuario " prepend-icon="person " solo></v-text-field>
        </v-flex>

        <v-flex xs12 mx-3>
          <v-text-field placeholder="******* " prepend-icon="verified_user " solo></v-text-field>
        </v-flex>

<<<<<<< Updated upstream
        <!-- DRAWER MENÚ -->
        <!-- <v-list-tile @click="$route.push( '/') " v-for="label in labels " :key="label.title ">
=======
        <!-- DRAWER MENÚ 
        <v-list-tile @click="$route.push( '/') " v-for="label in labels " :key="label.title ">
>>>>>>> Stashed changes
          <v-list-tile-action>
            <v-icon>calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Título</v-list-tile-title>
          </v-list-tile-content>
<<<<<<< Updated upstream
        </v-list-tile> -->
=======
        </v-list-tile>
        -->
>>>>>>> Stashed changes

      </v-list>
    </v-navigation-drawer>

    <!-- TOOL BAR -->
    <v-toolbar class="" fixed app pl-3 pr-3>
      <v-icon :size="36 " color="light-green ">fa fa-leaf</v-icon>
      <v-toolbar-title> {{ title }} </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat @click="drawer=! drawer ">
        <span style="margin-right:15px; ">Abrir Menú</span>
        <v-icon flat mr-2>menu</v-icon>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'AppNav',
  data: () => ({
    // drawer: false,
    drawer: false,
    title: 'waly.io',
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
.navbar-component__ {
  .close-icon {
    cursor: pointer;
    transition: all 0.3 linear;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
