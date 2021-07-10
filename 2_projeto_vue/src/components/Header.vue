<template>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contato</a></li>
    <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  props:[
    "esta_logado"
  ]
};
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        background-color: rgb(49, 52, 53);
    }
    li{
        margin-right: 10px;
    }
    a{
        color: #DDD;
        text-decoration: none;
        transition: .55;
    }
    a:hover{
        color: turquoise;
    }
</style>