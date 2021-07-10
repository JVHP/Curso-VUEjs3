<template>
  <div>
    <Header :esta_logado="true"/>
    <!-- <h1>Olá Mundo!</h1> -->
    <primeiro-componente />
    <p>O dado teste é: {{ teste }}</p>
    <life-cycle />
    <pessoa />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";

export default {
  name: "App",
  components: {
    Header,
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
  },
  data() {
    return {
      teste: "Testando",
    };
  },
};
</script>

<style>
  body{
    background-color: rgb(228, 228, 228);
    color: rgb(49, 49, 49);
  }

  a{
    color: red
  }
</style>
