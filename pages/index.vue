<template lang='pug'>
v-layout
  v-flex(v-for="item in items" :key="item.key")
    v-card.ma-3(elevation="4" shaped loading)
      v-card-title.headline {{ item.headline }}
      v-card-text.pa-5.display-1
        | {{ item.value }}
      v-card-actions
        v-spacer
        v-btn(color='primary' flat @click='openModal(item.modalSettings)') Drilldown
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          'key': 1,
          'headline': 'Weekly increase in sales',
          'value': '75%',
          'modalSettings': {}
        },
        {
          'key': 2,
          'headline': 'Number of clothes this week',
          'value': '120 un.',
          'modalSettings': {}
        },
        {
          'key': 3,
          'headline': 'Average sales per sales person',
          'value': '4.33',
          'modalSettings': {}
        }
      ]
    }
  },
  methods: {
    openModal(settings) {
      return true
    }
  }
}
</script>
