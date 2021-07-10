<template>
  <div>
    <Picture />
    <p>{{ email }}</p>
    <h2>Essa é a descrição de uma pessoa: {{ nome }}</h2>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Não estou trabalhando no momento e estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias para Back-End:</p>
    <ul>
      <li v-for="(tecs, index) in backend_technologies" :key="index">{{ tecs }}</li>
    </ul>
    <p>Utilizo as seguintes tecnologias para Back-End:</p>
    <ul>
      <li v-for="tecs in frontend_technologies" :key="tecs.id">{{ tecs.language }}</li>
    </ul>
    <div>
      <button @click="showEmail()" 
      class="btn btn-light">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
  </div>
</template>

<script>
import Picture from "./Picture.vue"

export default {
  name: "Info",
  components: {
    Picture
  },
  props: {
    email: String,
    esta_trabalhando: Boolean,

  },
  data() {
    return {
      mostrar_email: false,
      textoBotao: "Mostrar E-Mail",
      meu_link: "https://google.com",
      backend_technologies: ['Java Script', 'PhP', 'Python'],
      frontend_technologies: [
        {
          id:1,
          language: 'HTML',
        },
        {
          id:2,
          language: 'CSS',
        },
        {
          id:3,
          language: 'Bootstrap',
        },
      ],
    }
  },
  methods:{
    showEmail() {
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email){
        this.textoBotao = "Mostrar E-Mail"
      }else{
        this.textoBotao = "Esconder E-Mail"
      }
    }
  }
};
</script>