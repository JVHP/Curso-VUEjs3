<template>
    <div>
        <button class="btn" @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro(txt3, $event)">Ativar Múltiplos Eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data(){
        return{
            multiplos_eventos: "",
            txt1: "Primeiro Evento Ativo",
            txt2: "Segundo Evento Ativo",
            txt3: "Terceiro Evento Ativo",
        }
    },
    methods: {
        primeiro(s, e){
            e.preventDefault()
            this.multiplos_eventos = s
        },
        segundo(s, e){
            e.preventDefault()
            setTimeout(() => this.multiplos_eventos = s, 5000)
        },
        terceiro(s, e){
            e.preventDefault()
            setTimeout(() => this.multiplos_eventos = s, 6000)
        },
    },

}
</script>

<style scoped>
    div{
        margin: 10px;
    }
</style>