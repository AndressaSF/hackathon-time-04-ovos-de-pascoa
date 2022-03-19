<template>
<div style="width: 80%" class="registro">
    <h2>Cadastro de Cliente</h2>
    <router-link to="cadastro-vendedores">
        <v-btn color="purple" text >
            É vendedor?
        </v-btn>
    </router-link>
    <v-form class="registro-box" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="nome" label="Nome Completo" required>
        </v-text-field>
        <v-text-field v-model="telefone" label="Telefone" required >
        </v-text-field>
        <v-text-field v-model="email" label="E-mail" required>
        </v-text-field>
        <v-text-field v-model="endereco" label="Endereço" required>
        </v-text-field>
        <v-text-field v-model="cpf" label="CPF" required>
        </v-text-field>
        <v-text-field v-model="senha" type="password" label="Senha" required>
        </v-text-field>

    </v-form>
        <div class="botoes">

            <router-link to="/loja">
                <v-btn
                    class="mx-2"
                    color="purple"
                    elevation="2"
                    medium
                    outlined
                    rounded
                    @click="cadastrar"
                >
                    Cadastrar
                </v-btn>
            </router-link>

            <v-btn
                class="mx-2"
                color="purple"
                elevation="2"
                medium
                outlined
                rounded
                @click="limpar"
            >
                Limpar
            </v-btn>
        </div>
    </div>
</template>


<script>
export default {
    name: "CadastroClienteView.vue",
    data() {
        return {
            nome: "",
            cpf: "",
            endereco: "",
            telefone: "",
            email: "",
            senha: "",
        };
    },

    methods: {
        cadastrar() {},
        limpar() {
            this.nome = "";
            this.cpf = "";
            this.endereco = "";
            this.telefone = "";
            this.email = "";
            this.senha = "";
        },
    },
};
</script>

<style>
.registro {
    text-align: center;
    margin: auto;
    margin-top: 30px;
    
}
.registro-box {
    max-width: 100vw;
}
</style>