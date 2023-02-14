<template>
<div>
  <div class='rating'>
    <h1>Avalie o conteúdo:</h1>
  </div>

  <div class='space-between'></div>

  <div class='emoji-button'>
    <button @click="enviar('disgusted')">☹️</button>
    <button @click="enviar('did_not_like')">🙁</button>
    <button @click="enviar('neutral')">😐</button>
    <button @click="enviar('liked')">🙂</button>
    <button @click="enviar('really_liked')">😃</button>
  </div>

  <div class='emoji-subtitle'>
    <p>Péssimo Ruim Regular Bom Ótimo </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'avaliacao',
  data () {
    return {
      rating: ''
    }
  },
  methods: {
    enviar(key) {
      this.rating = key
    }
  }
}
</script>

<style scoped>
.rating {
margin-top: 15px;
font-size: 20px;
text-align: center;
}

.emoji-button {
  text-align: center;
  font-size: 30px;
  letter-spacing: 74px;
  margin-left: 13px;
}

.emoji-subtitle {
  text-align: center;
  word-spacing: 82px;
}
</style>
