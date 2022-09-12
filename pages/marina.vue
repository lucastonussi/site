<template>
  <div>
    <div class='grid-container'>
      <div>
        <img width='300px' height='200px' src="https://placedog.net/169"/>
        <h3>{{ lola.titulo }}</h3>
        <p>{{ lola.frase }}</p>
        <p>{{ lola.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/501"/>
        <h3>{{ miuxa.titulo }}</h3>
        <p>{{ miuxa.frase }}</p>
        <p>{{ miuxa.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/502"/>
        <h3>{{ thomas.titulo }}</h3>
        <p>{{ thomas.frase }}</p>
        <p>{{ thomas.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/503"/>
        <h3>{{ tango.titulo }}</h3>
        <p>{{ tango.frase }}</p>
        <p>{{tango.name}}</p>
      </div>
    </div>

    <div class='grid-container'>
      <div>
        <img width='300px' height='200px' src="https://placedog.net/169"/>
        <h3>{{ lola.titulo }}</h3>
        <p>{{ lola.frase }}</p>
        <p>{{ lola.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/501"/>
        <h3>{{ miuxa.titulo }}</h3>
        <p>{{ miuxa.frase }}</p>
        <p>{{ miuxa.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/502"/>
        <h3>{{ thomas.titulo }}</h3>
        <p>{{ thomas.frase }}</p>
        <p>{{ thomas.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/503"/>
        <h3>{{ tango.titulo }}</h3>
        <p>{{ tango.frase }}</p>
        <p>{{tango.name}}</p>
      </div>
    </div>
  
    <div class='grid-container'>
      <div>
        <img width='300px' height='200px' src="https://placedog.net/169"/>
        <h3>{{ lola.titulo }}</h3>
        <p>{{ lola.frase }}</p>
        <p>{{ lola.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/501"/>
        <h3>{{ miuxa.titulo }}</h3>
        <p>{{ miuxa.frase }}</p>
        <p>{{ miuxa.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/502"/>
        <h3>{{ thomas.titulo }}</h3>
        <p>{{ thomas.frase }}</p>
        <p>{{ thomas.name}}</p>
      </div>
    
      <div>
        <img width='300px' height='200px' src="https://placedog.net/503"/>
        <h3>{{ tango.titulo }}</h3>
        <p>{{ tango.frase }}</p>
        <p>{{tango.name}}</p>
      </div>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
  </style>
