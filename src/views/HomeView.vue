<template>
  <v-container> 

    <v-card
    class="mx-auto first"
    max-width="344"
    >
    <v-img
      src="../assets/promocao.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      NÃO PERCA NOSSAS OFERTAS
    </v-card-title>

    <v-card-actions>
      <router-link to="/loja">
        <v-btn
          color="primary"
          text
        >
          Compre Aqui
        </v-btn>
      </router-link>
      

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>

    <v-card
    class="mx-auto second"
    max-width="344"
  >
    <v-img
      src="../assets/pascoamain.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      CADASTRE-SE 
    </v-card-title>

    <v-card-subtitle>
      E RECEBA DIVERSOS BENEFÍCIOS
    </v-card-subtitle>

    <v-card-actions>
      <router-link to="/cadastro-clientes">
        <v-btn
          color="primary"
          text
        >
          Cliente
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/cadastro-vendedores">
        <v-btn
          color="primary"
          text
        >
          Vendedor
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
  </v-container>
  
</template>

<script>

export default {
  name: "HomeView",

  data(){
    return {
      teste: "Bem vindo à nossa Loja",
      show: false,
    }
  }
  
};
</script>

<style>
.first {
  margin-bottom: 30px;
}

* {
  text-decoration: none;
}
</style>