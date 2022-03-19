<template>
  <v-card class="mx-auto my-3" max-width="400" >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="imagem"
    >
      <v-card-title>{{ nome }}</v-card-title>
    </v-img>

    <v-card-subtitle class="subtitle-1 pb-0">
        <div> R${{preco}} • {{nomeLocal}} </div>
    </v-card-subtitle>

    <v-card-subtitle class="subtitle-2 pt-1 pb-3">
      {{endereco}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div> {{sabor}} </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="purple" text >
        Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data() {
      return {
          show: false,
        };
    },
    props: {
        nome: undefined,
        sabor: undefined,
        imagem: undefined,
        endereco: undefined,
        cep: undefined,
        nomeLocal: undefined,
        preco: undefined
    },
    methods: {
        
    },
};
</script>

<style>
</style>