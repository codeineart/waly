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
            <h2 class="headline">{{howWorks.title}}</h2>
            <div class="subheading">
              {{howWorks.description}}
            </div>
          </div>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>


              <div class="steps-card xs12" v-for="step in steps" :class="'locate-icon-'+step.position" origin="top center 0">
                <div class="step-icon">
                  <v-icon x-large class="light-green--text text--lighten-2">{{step.icon}}</v-icon>
                </div>
                <div class="step-title">
                  <h3>
                    {{step.title}}
                  </h3>
                </div>
                <div class="step-description">
                  <p>
                    {{step.description}}
                  </p>
                </div>
              </div>

            </v-layout>
          </v-container>
        </v-flex>

      </v-layout>
    </section>

    <section>
      <v-parallax src="/static/header.jpg" height="380">
        <v-layout bisel column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">¿Quieres contribuir al proyecto?</div>
          <em>Ingresa hoy y forma parte de los pioneros en el cambio</em>
          <v-btn class="purple darken-2 mt-5" dark large href="/#/reciclar">
            Reciclar
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
    steps: [
      {
        icon: 'find_in_page',
        title: 'Identificación del residuo',
        description: 'Usuario informa el tipo de residuo que posee.',
        position: 'left',
      },
      {
        icon: 'category',
        title: 'Opciones de reciclaje',
        description: 'La plataforma entrega información sobre las opciones disponibles para gestionar el residuo.',
        position: 'right',
      },
      {
        icon: 'gps_fixed',
        title: 'Disposición final',
        description: 'Es el destino final de la RAEE, lo que marca el inicio de su nuevo ciclo de vida, en todas sus materias y componentes son reducidos, reciclados y reusados.',
        position: 'left',
      },
    ],
    howWorks: {
      title: '¿Cómo funciona?',
      description:
        'El proceso inicia con el fin de la vida útil de un aparato eléctrico u electrónico, cuando esto sucede el dispositivo pierde su función y pasa a ser un residuo que contiene elementos nocivos para el entorno. Para evitar que el residuo termine en un vertedero nuestra plataforma permite gestionar el aparato de manera responsable, segura y eficiente en 3 simples pasos.',
    },
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
<style lang="stylus">
.headline {
  font-size: 32px !important;
  margin-bottom: 20px;
}

.subheading {
  max-width: 700px;
  margin: 0 20px;
}

.card__text {
  text-align: center;
}

.parallax__content {
  padding: 0;
}

.steps-card {
  width: 100%;
  margin: 25px 0;

  .step-title {
    h3 {
      font-size: 17px;
    }
  }

  .step-icon {
    i {
      font-size: 70px !important;
      margin-top: -5px;
    }
  }

  &.locate-icon-left {
    text-align: left;

    .step-icon {
      margin: 0 15px;
      float: left;
    }
  }

  &.locate-icon-right {
    text-align: right;

    .step-icon {
      float: right;
      margin: 0 15px;
    }
  }
}
</style>
