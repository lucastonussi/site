<template>
  <div>
    <button @click="enviar">Enviar</button>
    <span v-show="enviou">Enviado!</span>
  </div>
</template>


<script>
export default {
  name: 'avaliacao',
  data () {
    return {
      enviou: false
    }
  },
  methods: {
    enviar() {
      this.enviou = !this.enviou
    }
  }
}
</script>