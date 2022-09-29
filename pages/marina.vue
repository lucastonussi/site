<template>
<div>
  <div class='grid-container'>
    <!-- <span>{{ tamanhoFiguras }}</span> -->
    <div class='grid-container'>
      <label>Tamanho Figuras</label>
      <input type="range" min="30" max="100" v-model="figureHeightSlider" class="slider">
    </div>

    <div class='grid-container'>
      <label>Cor Bordas (RGB)</label>
      <input type="range" min="0" max="225" v-model="figureBorderColorR" class="slider">
      <input type="range" min="0" max="225" v-model="figureBorderColorG" class="slider">
      <input type="range" min="0" max="225" v-model="figureBorderColorB" class="slider">
    </div>
  </div>

  <div class='space-between'></div>

  <div class='grid-container'>
    <div class='figure-card' :style='buildBorderColor'>
      <img :height='figureHeightSlider' alt='lola.titulo' src="https://placedog.net/169"/>
      <h1 style='font-weight: bold;'>{{ lola.name }}</h1>
      <h3>{{ lola.titulo }}</h3>
      <p>{{ lola.frase }}</p>
    </div>

    <div class='figure-card' :style='buildBorderColor'>
      <img :height='figureHeightSlider' alt='miuxa.titulo' src="https://placedog.net/501"/>
      <h1 style='font-weight: bold;'>{{ miuxa.name }}</h1>
      <h3>{{ miuxa.titulo }}</h3>
      <p>{{ miuxa.frase }}</p>
    </div>

    <div class='figure-card' :style='buildBorderColor'>
      <img :height='figureHeightSlider' alt='thomas.titulo' src="https://placedog.net/502"/>
      <h1 style='font-weight: bold;'>{{ thomas.name }}</h1>
      <h3>{{ thomas.titulo }}</h3>
      <p>{{ thomas.frase }}</p>
    </div>

    <div class='figure-card' :style='buildBorderColor'>
      <img :height='figureHeightSlider' alt='tango.titulo' src="https://placedog.net/503"/>
      <h1 style='font-weight: bold;'>{{ tango.name }}</h1>
      <h3>{{ tango.titulo }}</h3>
      <p>{{ tango.frase }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    buildBorderColor() {
      return `border: 1px dashed rgb(${this.figureBorderColorR}, ${this.figureBorderColorG}, ${this.figureBorderColorB})`
    }
  },
  data() {
    return {
      figureHeightSlider: 100,
      figureBorderColorR: 50,
      figureBorderColorG: 50,
      figureBorderColorB: 50,
      lola: {
        titulo: 'Dicas de como cuidar do seu cachorro',
        frase: 'Cachorro independente e sem ansiedade de separação',
        name: 'Lola'
      },
      miuxa: {
        titulo: 'Dicas de como cuidar do seu cachorro',
        frase: 'Cachorro independente e sem ansiedade de separação',
        name: 'Miuxa'
      },
      thomas: {
        titulo: 'Dicas de como cuidar do seu cachorro',
        frase: 'Cachorro independente e sem ansiedade de separação',
        name: 'Thomas'
      },
      tango: {
        titulo: 'Dicas de como cuidar do seu cachorro',
        frase: 'Cachorro independente e sem ansiedade de separação',
        name: 'Tango'
      }
    }
  }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  text-align: center;
}

.slider {
  width: 100px;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
}

.space-between {
  margin-top: 5em;
}

.figure-card {
  width: 200px;
  padding: 20px;
}
</style>
