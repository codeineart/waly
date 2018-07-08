<template>
  <v-content class="landing-page__">
    <!-- BIG HEADER -->
    <section>
      <v-container fluid pt-5 pb-5 class="header-background">
        <div class="bisel"></div>
        <v-layout column align-center justify-center class="white--text">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-icon :size="150" color="light-green">fa fa-leaf</v-icon>
          <h1 class="white--text mb-2 display-1 text-xs-center text-shadow">Waly e-waste</h1>
          <div class="subheading mb-3 text-xs-center text-shadow">Sistema de reciclaje electrónico colectivo.</div>

          <v-layout row>
            <v-btn round class="purple darken-2 mt-3" dark large href="/#/reciclar">
              Más Información
            </v-btn>

            <v-btn round class="purple darken-2 mt-3" dark large href="/#/reciclar">
              Reciclar
            </v-btn>
          </v-layout>

          <v-spacer></v-spacer>
        </v-layout>
      </v-container>
    </section>

    <!-- INFORMATION -->
    <section>
      <v-layout column wrap class="my-5" align-center>

        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>

              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

      </v-layout>
    </section>

    <section>
      <v-parallax src="/static/header.jpg" height="380">
        <v-layout bisel column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn class="purple darken-2 mt-5" dark large href="/pre-made-themes">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: 'Landing',
  data: () => ({
    title: 'Your Logo',
  }),
  created() {},
  components: {},
};
</script>

<style lang="scss">
@import 'src/assets/index.scss';
.landing-page__ {
  .header-background {
    // background-color: lightseagreen;
    background-color: $color3;
    position: relative;
  }
}
</style>
