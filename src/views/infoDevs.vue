<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Sobre os Devs</h2>
         
        <p>O APP Páscoathon foi desenvolvido durante a Edição Luna do Hackathon Decola Iteris promovido pela 
            <a href="www.iteris.com.br">Iteris. </a><br>Ele tem o objetivo de aproximar o cliente e o vendedor local, pois auxilia as pessoas que entraram nesse mercado durante a pandemia e sentem dificuldades com as vendas.</p>
        
        <p>Conheça os desenvolvedores</p>

        <v-simple-table>
            <template>
                <tbody>
                <tr v-for="desenvolvedor of desenvolvedores" :key="desenvolvedor.id" >
                    <td>
                        <v-avatar size=62 mb-50 mt-5>
                            <img
                                :src="desenvolvedor.avatar" 
                                :alt="desenvolvedor.nome"
                            >
                        </v-avatar>
                    </td>
                    <td><a :href="desenvolvedor.link"> {{desenvolvedor.nome}}</a></td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

    </v-container>

</template>

<script>
export default {
    name: 'SobreProjeto',

    data() {
        return {
            desenvolvedores: [
              {
                    "id": 1,
                    "link": "https://github.com/andressaSF/",
                    "nome": "Andressa Freitas",
                    "avatar": "https://github.com/andressaSF.png"
                },
                {
                    "id": 2,
                    "link": "https://github.com/fernandoTasca/",
                    "nome": "Fernando Tasca",
                    "avatar": "https://github.com/fernandoTasca.png"
                },
                {
                    "id": 3,
                    "link": "https://github.com/luizhss/",
                    "nome": "Luiz Henrique",
                    "avatar": "https://github.com/luizhss.png"
                },
                
                {
                    "id": 4,
                    "link": "https://github.com/tamarabluz/",
                    "nome": "Tamara Luz",
                    "avatar": "https://github.com/tamarabluz.png"
                },
                {
                    "id": 5,
                    "link": "https://github.com/wilsenyTeixeira/",
                    "nome": "Wilseny Teixeira",
                    "avatar": "https://github.com/wilsenyTeixeira.png"
                },
                
            ]
        };
    },
    
};

</script>

<style scoped>
    .inicio-imagem {
        border-radius: 5px;
    }
</style>