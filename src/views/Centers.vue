<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout
        justify-center
        align-center
      >
        <v-flex text-xs-center>

          <template>
            <v-container fluid grid-list-md>
              <v-data-iterator
                :items="items"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
                content-tag="v-layout"
                row
                wrap
              >
                <v-flex
                  slot="item"
                  slot-scope="props"
                  xs12
                  sm6
                  md4
                  lg3
                >
                  <v-card>
                    <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-tile>
                        <v-list-tile-content>Ubicacion:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Numero de contacto:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Tiene espacio:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                      </v-list-tile>
                      
                    </v-list>
                  </v-card>
                </v-flex>
              </v-data-iterator>
            </v-container>
          </template>

        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Centers',
    data: () => ({
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      items: [
        {
          name: 'Centro las cerro colorado',
          calories: 'Cerro colorado 5870, las Condes',
          fat: '+56 9 65654654',
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
         {
          value: false,
          name: 'Centro las cerro colorado',
          calories: 'Cerro colorado 5870, las Condes',
          fat: '+56 9 65654654',
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
      ]
    })
  }
</script>
