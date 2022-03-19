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
      <v-btn
        color="orange lighten-2"
        text
      >
        Compre Aqui
      </v-btn>

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
      Anuncie em nossa loja
    </v-card-title>

    <v-card-subtitle>
      milhares de benefícios
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Cadastrar-se
      </v-btn>

      <v-spacer></v-spacer>

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
</style>