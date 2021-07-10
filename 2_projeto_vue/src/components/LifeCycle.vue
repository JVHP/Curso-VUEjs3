<template>
  <h3>Meu nome é: {{ nome }}</h3>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: "Armando",
    };
  },
  created() {
    setTimeout(() => {
      this.nome = "Marcos";
    }, 1000);
    this.lifeCycle()
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Pedro";
    }, 2000);
    this.lifeCycle()
  },
  methods: {
    lifeCycle() {
      console.log("Olá!")
    }
  }
};
</script>
