<template>
<div>
  <img src="https://placedog.net/1000"/>
  <h1>{{ titulo }}</h1>
  <p>{{ frase }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Dicas de como cuidar do seu cachorro',
      frase: 'Cachorro independente e sem ansiedade de separação'
    }
  }
}
</script>
