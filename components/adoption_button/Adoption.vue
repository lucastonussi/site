<template>
  <div>
    <div class='adoption'>
      <button @click="enviar('adopt')">Audotar</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adoptpet',
    data () {
      return {
        adoption: ''
      }
    },
    methods: {
      enviar(key) {
        this.adoption = key
      }
    }
  }
</script>

<style scoped>
.adoption {
  font-size: 25px;
  border: 5px outset grey;
  border-radius: 5px;
  text-align: center;
}
</style>