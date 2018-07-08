<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <transition name="fade">
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  label="Nombre"
                ></v-text-field>
                <v-text-field
                  v-model="waste"
                  label="Que quiero reciclar"
                ></v-text-field>
                <v-text-field
                  v-model="quantity"
                  label="¿Cuantas unidades son?"
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="¿Que tipo de entidad soy?"
                  required
                ></v-select>
                

                <v-btn @click="enviar()">Enviar</v-btn>
              </v-form>
            </template>
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
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      quantity: 1,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Colegio',
        'Quiero Reciclar',
        'Recolector',
        'Empresa Recicladora',
        'Empresa Produtora'
      ],
      checkbox: false
  }),
  props: {
    source: String,
  },
  methods: {
    enviar: function(){
      document.location='/#/centros'
    },
    submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
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

