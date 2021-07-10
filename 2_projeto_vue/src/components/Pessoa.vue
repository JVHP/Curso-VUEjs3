<template>
  <div>
    <Info :email="email" :esta_trabalhando=true />
    <Form />
  </div>
</template>

<script>
import Info from "./Info"
import Form from "./Form"

export default {
  name: "Pessoa",
  components: {
    Info,
    Form,
  },
  data() {
    return {
      nome: "José",
      email: "jvhp@gmail.com",
    };
  },
};
</script>
