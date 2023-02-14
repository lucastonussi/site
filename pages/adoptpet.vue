<template>
  <div>
    <div class='grid-container'>
      <div v-for="pet in pets">
        <div class='figure-card pet-box'>
          <h1>{{ pet.name }}</h1>
          <img :height="100" :src="firstPicture(pet.picture)"/>
          <div style="padding-bottom: 50px; height: 50px;">
            <h3>{{ pet.titulo }}</h3>
          </div>
          <div class='description'>
            <span>{{ pet.description }}</span>
          </div>
          <adoption></adoption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Adoption from '@/components/adoption_button/Adoption'

  export default {
    components: {
      Adoption
    },
    data() {
      return {
        pets: [
          {
            titulo: 'sharpei',
            description: 'Lola é uma linda sharpei com 4 anos e super dócil. Adora brincar de correr.',
            name: 'Lola',
            picture: ['lola/lola.webp']
          },
          {
            titulo: 'Border Collie',
            description: 'Thomas é um cãozinho de 4 anos e de porte grande. Ele é dócil com pessoas, mas precisa ser filho único.',
            name: 'Thomas',
            picture: ['thomas/thomas.webp']
          },
          {
            titulo: 'Border Collie',
            description: 'Tango é um adulto, tem 8 anos e é de porte grande. É super tranquilo, se dá bem com outros animais e espera por uma família que o ame muito!',
            name: 'Tango',
            picture: ['tango/tango.webp']
          },
          {
            titulo: 'Bulldog',
            description: 'Perfeita para fazer companhia, é a cachorrinha mais dócil que você vai conhecer. Ela tem 1 ano, é de porte pequeno e amigável com outros animais.',
            name: 'Zoey',
            picture: ['zoey/zoey.jpeg']
          }
        ]
      }
    },
    methods: {
      firstPicture(picture) {
        return 'site/' + picture[0]
      }
    }
  }
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  row-gap: 50px;
  justify-content: space-evenly;
  align-content: center;
  text-align: center;
}

.pet-box {
  border: 3px solid black; height: 410px; border-radius: 12px;
}

.figure-card {
  width: 300px;
  padding: 20px;
}

.description {
  text-align: justify;
  padding-bottom: 30px;
}
</style>
