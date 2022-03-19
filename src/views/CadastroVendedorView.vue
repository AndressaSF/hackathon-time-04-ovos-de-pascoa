<template>
<div style="width: 80%" class="registro">
    <h2>Cadastro de Vendedor</h2>
    <v-form class="registro-box" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="nome" label="Nome Completo" required>
        </v-text-field>
        <v-text-field v-model="telefone" label="Telefone" required >
        </v-text-field>
        <v-text-field v-model="email" label="E-mail" required>
        </v-text-field>
        <v-text-field v-model="nome" label="Nome da Loja" required>
        </v-text-field>
        <v-text-field v-model="endereco" label="Endereço da Loja" required>
        </v-text-field>
        <v-text-field v-model="email" label="CNPJ da Loja" required>
        </v-text-field>

        <v-text-field v-model="password" type="password" label="Senha" required>
        </v-text-field>

    </v-form>
        <div class="botoes">
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
    name: "CadastroVendedorView.vue",
    data() {
        return {
            nomeVendedor: "",
            nomeLoja: "",
            cnpj: "",
            endereco: "",
            telefone: "",
            email: "",
            senha: "",
        };
    },

    methods: {
        cadastrar() {},
        limpar() {
            this.nomeVendedor = "";
            this.nomeLoja = "";
            this.cnpj = "";
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