<template>
<div>
  <div class='rating'>
    <h1>Avalie o conteúdo</h1>
  </div>
  <div class='emoji-button'>
    <button @click="enviar('disgusted')">☹️</button>
    <button @click="enviar('did_not_like')">🙁</button>
    <button @click="enviar('neutral')">😐</button>
    <button @click="enviar('liked')">🙂</button>
    <button @click="enviar('really_liked')">😃</button>
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
}

.emoji-button {
  margin-left: 50px;
}
</style>
