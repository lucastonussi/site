<template>
<div>
  <div class='grid-container'>
    <div v-for="fii in fiis">
      <div class='figure-card fii-box'>
        <h1>{{ fii.name }}</h1>
        <div style="padding-bottom: 25px; height: 50px;">
          <h3>{{ fii.titulo }}</h3>
        </div>
        <div style="margin-top: 20px;">
          <span style="margin-right: 25%;">{{ fii.dy }}</span>
          <span>{{ fii.p_vp }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>
export default {
  data() {
    return {
      fiis: [
        {
          titulo: 'Fundo Imobiliário CSHG LOGÍSTICA',
          dy: 'DY 0,68%',
          p_vp: 'P/VP 1,04',
          name: 'HGLG11'
        },
        {
          titulo: 'Fundo Imobiliário XP MALLS',
          dy: 'DY 0,91%',
          p_vp: 'P/VP 0,95',
          name: 'XPML11'
        },
        {
          titulo: 'Fundo Imobiliário Iridium Recebíveis Imobiliários',
          dy: 'DY 0,99%',
          p_vp: 'P/VP 0,99',
          name: 'IRDM11'
        },
        {
          titulo: 'Fundo Imobiliário Alianza Trust Renda Imobiliária',
          dy: 'DY 0,69%',
          p_vp: 'P/VP 1,04',
          name: 'ALZR11'
        },
        {
          titulo: 'Fundo Imobiliário Kinea Renda Imobiliária',
          dy: 'DY 0,65%',
          p_vp: 'P/VP 0,85',
          name: 'KNRI11'
        },
        {
          titulo: 'Fundo Imobiliário CSHG Real Estate',
          dy: 'DY 0,69%',
          p_vp: 'P/VP 0,69',
          name: 'HGRE11'
        },
        {
          titulo: 'Fundo Imobiliário Kinea Rendimentos Imobiliários',
          dy: 'DY 1,21%',
          p_vp: 'P/VP 0,98',
          name: 'KNCR11'
        },
        {
          titulo: 'Fundo Imobiliário BTG Pactual Fundo de Fundos',
          dy: 'DY 0,89%',
          p_vp: 'P/VP 0,83',
          name: 'BCFF11'
        }
      ]
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

.fii-box {
  border: 1px solid black; height: 175px; border-radius: 12px;
}

.figure-card {
  width: 300px;
  padding: 20px;
}
</style>
