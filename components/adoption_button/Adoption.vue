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
  font-size: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 40%;
  height: 5vh;
  text-align: center;
  margin-left: 80px;
}
</style>