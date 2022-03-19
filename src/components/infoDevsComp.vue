<template>
    <v-container class="paginaDevs">
    <h2 class="tituloPagina">Desenvolvedores do Projeto</h2>
    <h3>Conheça um pouco sobre os nossos desenvolvedores.</h3>
    <div class="nomeDev">
        <ul>
        <ol id="andressa">
            Andressa Freitas
            <ol><a href="https://github.com/AndressaSF">Perfil do GitHub</a></ol>
            <ol><a href="">Perfil do Linkedin</a></ol>
        </ol>
        <ol id="fernando">
            Fernando Tasca
            <ol><a href="https://github.com/FernandoTasca">Perfil do GitHub</a></ol>
            <ol><a href="">Perfil do Linkedin</a></ol>
        </ol>
        <ol id="luiz">
            Luiz Henrique
            <ol><a href="https://github.com/luizhss">Perfil do GitHub</a></ol>
            <ol><a href="">Perfil do Linkedin</a></ol>
        </ol>
        <ol id="tamara">
            Tamara Luz
            <ol><a href="https://github.com/tamarabluz">Perfil do GitHub</a></ol>
            <ol><a href="">Perfil do Linkedin</a></ol>
        </ol>
        <ol id="wilseny">
            Wilseny Teixeira
            <ol><a href="https://github.com/WilsenyTeixeira">Perfil do GitHub</a></ol>
            <ol><a href="">Perfil do Linkedin</a></ol>
        </ol>
    </ul>
    </div>
    </v-container>
        
</template>

<script>
export default {
    name: 'infoDevs',
}
</script>

<style scoped>
    *{
        align-content: center;
        text-decoration: none;
    }

    h2{
        text-align: center  ;
    }

    h3{
        text-align: center;
    }

    .nomeDev{
        font-weight: 700;
    }

    a{
        font-weight: 450;
    }

</style>