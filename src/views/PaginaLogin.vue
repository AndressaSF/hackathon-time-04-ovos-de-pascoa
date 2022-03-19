<template>
     <v-app>
    <div style="width: 80%" class="PaginaLogin">
      <div class="PaginaLogin-form">
        <h2 class="text-h5 text-center mb-3 mt-5">Login</h2>
      </div>

      <v-form class="PaginaLogin-box">
        <v-text-field  label="Usuário" required> </v-text-field>

        <v-text-field
          type="Senha"
          label="Senha"
          required
        >
        </v-text-field>
      </v-form>

      <div class="botoes">
        <v-btn
          @click="nologin"
          color="purple darken-4"
          elevation="2"
          medium
          outlined
          rounded
          >Login</v-btn
        >
        
          <v-btn  @click="delay"  color="purple darken-4" elevation="2" medium outlined rounded
            > Cadastrar</v-btn
          >
        
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "PaginaLogin",
  data() {
    return {
    };
  },
  methods: {
    nologin: function () {
    
      alert('Você não possui cadastro conosco, clique em CADASTRAR')
    },
    delay(){
        setTimeout(()=>{
          this.$router.push('/cadastrousuario')
          },100)

    }
  }
}
</script>

<style scoped>
.PaginaLogin {
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
}
.login-box {
  max-width: 100%;
}
.botoes a {
  text-decoration: none;
}
</style>