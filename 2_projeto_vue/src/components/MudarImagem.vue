<template>
  <div>
    <button class="btn btn-outline-secondary" @click="$emit('mudarImagem')">
      Trocar Imagem do Perfil
    </button>
  </div>
</template>

<script>
export default {
  name: "MudarImagem",
  emits: ["mudarImagem"],
};
</script>