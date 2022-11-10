<template lang="pug">
v-layout(row wrap)
  v-layout.mb-3(:key='i' v-for='(verse, i) in versesNumbers')
    v-col.md-3
      v-card.mb-5(width='250px')
        v-card-title mateus
        v-card-text {{ buildVerse(verse['mateus']) }}
    v-col.md-3
      v-card.mb-5(width='250px')
        v-card-title marcos
        v-card-text {{ buildVerse(verse['marcos']) }}
    v-col.md-3
      v-card.mb-5(width='250px')
        v-card-title lucas
        v-card-text {{ buildVerse(verse['lucas']) }}
    v-col.md-3
      v-card.mb-5(width='250px')
        v-card-title joao
        v-card-text {{ buildVerse(verse['joao']) }}
</template>

<script>
import { parseVerses } from '@/libs/CsvReader/ParallelVersesService'

export default {
  data() {
    return {
      versesNumbers: null,
      gospels: [
        { name: 'Mateus', key: 'mateus' },
        { name: 'Marcos', key: 'marcos' },
        { name: 'Lucas', key: 'lucas' },
        { name: 'João', key: 'joao' }
      ]
    }
  },
  mounted() {
    this.versesNumbers = parseVerses().slice(0, 150)
    console.log(this.versesNumbers)
  },
  methods: {
    onIntersect (entries, observer, isIntersecting) {},
    buildVerse(verse) {
      let verseParsed = verse.split('*')
      let chapterNumber = verseParsed[0]
      let verseNumber = verseParsed[1]

      if (verseNumber) {
        if (verseNumber.length === 3) verseNumber = verseNumber.slice(0, verseNumber.length - 1)
        if (verseNumber[0] === '0') verseNumber = verseNumber.slice(1)
      }

      return `${chapterNumber || ''}:${verseNumber || ''}`
    }
  }
}
</script>

<style>
</style>
