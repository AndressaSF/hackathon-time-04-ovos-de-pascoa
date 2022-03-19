<template>
  <div>
    <v-container>
      <CardOvosPascoa
        v-for="ovoPascoa in ovosPascoa"
        :key="ovoPascoa.id"
        :nome="ovoPascoa.nome"
        :preco="ovoPascoa.preco"
        :imagem="ovoPascoa.imagem"
        :sabor="ovoPascoa.sabor"
        :endereco="ovoPascoa.local.endereco"
        :cep="ovoPascoa.local.cep"
        :nomeLocal="ovoPascoa.local.nome"
      ></CardOvosPascoa>
    </v-container>
  </div>
</template>

<script>
import CardOvosPascoa from "../components/CardOvosPascoa";
export default {
  components: {
    CardOvosPascoa,
  },
  methods: {},
  data() {
    return {
      ovosPascoa: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => (this.ovosPascoa = json));
  },
};
</script>

<style>
</style>