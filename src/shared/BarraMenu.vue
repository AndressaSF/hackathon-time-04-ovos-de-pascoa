<template>
  <div class="barra-menu">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>NomeAPP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip v-if="!$vuetify.theme.dark" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Modo escuro desligado</span>
      </v-tooltip>

      <v-tooltip v-else top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Modo escuro ligado</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="light-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>PaginaInicial</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/login">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/cadastro-clientes">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/loja">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Loja</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/informacoes-sobre-desenvolvedores">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Informações sobre os desenvolvedores</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "BarraMenu",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    darkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>