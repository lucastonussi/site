<template lang="pug">
v-layout(row wrap)
  v-layout.mb-3
    v-col.md-3
      v-card.ma-5(width='300px')
        v-card-title Mateus
    v-col.md-3
      v-card.ma-5(width='300px')
        v-card-title Marcos
    v-col.md-3
      v-card.ma-5(width='300px')
        v-card-title Lucas
    v-col.md-3
      v-card.ma-5(width='300px')
        v-card-title João
  v-layout.mb-3(:key='i' v-for='(verse, i) in versesNumbers')
    v-col.md-3
      v-card.ma-5(width='300px' name='' v-intersect="onIntersectMatt")
        v-card-text {{ buildVerse(verse['mateus'], 'Mateus') }}
    v-col.md-3
      v-card.ma-5(width='300px' name='' v-intersect="onIntersectMark")
        v-card-text {{ buildVerse(verse['marcos'], 'Marcos') }}
    v-col.md-3
      v-card.ma-5(width='300px' name='' v-intersect="onIntersectLuc")
        v-card-text {{ buildVerse(verse['lucas'], 'Lucas') }}
    v-col.md-3
      v-card.ma-5(width='300px' name='' v-intersect="onIntersectJohn")
        v-card-text {{ buildVerse(verse['joao'], 'João') }}
</template>

<script>
import { parseVerses } from '@/libs/CsvReader/ParallelVersesService'

export default {
  data() {
    return {
      versesNumbers: null,
      versesNumbersSaved: null,
      gospels: [
        { name: 'Mateus', key: 'mateus' },
        { name: 'Marcos', key: 'marcos' },
        { name: 'Lucas', key: 'lucas' },
        { name: 'João', key: 'joao' }
      ]
    }
  },
  mounted() {
    this.versesNumbersSaved = parseVerses()
    this.versesNumbers = this.versesNumbersSaved
    console.log(this.versesNumbers)
  },
  methods: {
    onIntersectMatt(entries, observer, isIntersecting) {},
    onIntersectMark(entries, observer, isIntersecting) {},
    onIntersectLuc(entries, observer, isIntersecting) {},
    onIntersectJohn(entries, observer, isIntersecting) {},
    buildVerse(verse, gospel) {
      let verseParsed = verse.split('*')
      let chapterNumber = verseParsed[0]
      let verseNumber = verseParsed[1]

      if (verseNumber) {
        if (verseNumber.length === 3) verseNumber = verseNumber.slice(0, verseNumber.length - 1)
        if (verseNumber[0] === '0') verseNumber = verseNumber.slice(1)
      }

      if (chapterNumber && verseNumber) return `${gospel} ${chapterNumber}:${verseNumber}`

      return ''
    }
  }
}
</script>

<style>
</style>
