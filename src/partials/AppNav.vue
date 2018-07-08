<template>
<header>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    app
  >
    <v-list dense>
      <v-list-tile @click="" v-for="label in labels" :key="label.title">
        <v-list-tile-action>
          <v-icon>{{label.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{label.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Dashboard</v-toolbar-title>
  </v-toolbar>
</header>
</template>

<script>
  export default {
    name: 'AppNav',
    data: () => ({
      drawer: null,
      labels: [
        {
          title: 'Homee',
          icon: 'home'
        },
        {
          title: 'Contact',
          icon: 'contact_mail'
        }
      ]
    }),
    props: {
      source: String
    }
  }
</script>