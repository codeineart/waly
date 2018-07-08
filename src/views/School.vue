<template>
  <v-content>
    <v-container class="gutter0">
      <v-layout
        justify-center
        
      >
        <v-flex text-xs-center>

          <div class="slide bg">
            <img :src="items[0].src" alt="colegios">

            <h2 class="slide-description">{{items[0].text}}</h2>
            <div class="shadow"></div>
          </div>

        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'School',
    data: () => ({
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            text: 'Disminuye la huella de carbono de toda tu comunidad'
          }
        ]
    }),
    props: {
      source: String
    },
    created (){
      
    },
    mounted(){
      var els = document.getElementsByClassName('bg')

      Array.prototype.forEach.call(els, function(el) {
        console.log('el')
          let src = el.getElementsByTagName('img')[0].getAttribute('src')
          el.style.backgroundImage = 'url('+src+')'
      });
    }
  }
</script>
<style lang="stylus" scoped>
  .container
    &.gutter0
      padding 0 !important
    .slide
      position relative
      width 100%
      padding-bottom 30%
      img
        
        width 100%
      .slide-description
        color #f4f4f4
        position absolute
        z-index 1
        top 50%
        width 100%
    .bg
      background-size cover
      img
        display none
    .shadow
      width 100%
      height 100%
      background-color rgba(1,1,1,0.5)
      position absolute
      filter grayscale(.5)
</style>