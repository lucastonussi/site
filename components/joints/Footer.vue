<template lang="pug">
v-footer(:fixed='fixed' app)
  span &copy; {{ new Date().getFullYear() }}
  v-switch(v-model="contrast")
    v-icon(v-if="contrast") moon_waning_crescent
    v-icon(v-else) weather_sunny
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      fixed: true,
      contrast: true
    }
  },
  computed: {
    ...mapState({
      uiState: 'ui'
    }),
    contrast() {
      return this.uiState.contrast
    }
  },
  methods: {
    ...mapMutations({
      toggleContrast: 'ui/toggleContrast'
    })
  }
}
</script>
