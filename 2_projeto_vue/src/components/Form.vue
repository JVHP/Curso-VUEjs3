<template>
    <div>
        <form action="" class="form-group" @submit.prevent="enviarForm($event)">
            <div>
                <!--<input-text />-->
                <input type="text" v-model="name" required>
            </div>
            <div>
                <!--<input-text />-->
                <input type="text" v-model="email" required>
            </div>
            <div>
                <submit />
            </div>
        </form>
        <p><br></p>
    </div>
</template>

<script>
import InputText from "./Form/InputText.vue"
import Submit from "./Form/Submit.vue"

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data(){
        return{
        name: "",
        email: ""
        }
    },
    methods: {
        enviarForm(e){
            e.preventDefault()

            const name = this.name
            const email = this.email

            alert("O nome inserido foi: " + name + "\n"+"O email inserido foi: " + email)
            alert("Formulário Enviado")
        }
    }
}
</script>

<style scoped>
    p {
        margin: 10px;
    }
    input{
        margin: 5px;
    }
</style>