<template lang="pug">
v-row(justify='center')
  v-dialog(v-model='dialog' persistent max-width='80%' max-height='80%')
    template(v-slot:activator='{ on, attrs }')
      v-btn(color='primary' dark v-bind='attrs' v-on='on')
        | 2
    v-card
      v-card-title.text-h5
        | 1
      v-card-text 1
      v-card-actions
        v-spacer
        v-btn(color='green darken-1' text @click='dialog = false')
          | 3
        v-btn(color='green darken-1' text @click='dialog = false')
          | 4
</template>

<script>
  export default {
    data() {
      return {
        dialog: false
      }
    }
  }
</script>
