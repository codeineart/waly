<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Dashboard',
    data: () => ({
      drawer: null,
      labels: [
        {
          title: 'Home',
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
    },
    mounted(){
      this.$emit('clicked', 'asd')
    }
  }
</script>