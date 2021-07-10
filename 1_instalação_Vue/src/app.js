const MyNameApp = {
    data(){
        return{
            name: "José",
            age: 20,
            input_name: "",
            tmplt_name : ".insira seu nome abaixo."
        }
    },
    methods:{
        submit_form(e){
            e.preventDefault()
                console.log("Olhando no console né haha")
                alert("Bem Vindo " + this.input_name + "!!!")
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");