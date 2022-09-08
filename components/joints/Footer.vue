<template lang="pug">
v-footer(:fixed='fixed' app height='200px')
  v-container
    v-row
      span &copy; {{ new Date().getFullYear() }}
    v-row
      v-switch(success v-model="contrast" @click="toggleContrast" append-icon='nightlight' prepend-icon='lightbulb')
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import LanguageSwitch from '@/components/primitives/LanguageSwitch'

export default {
  components: {
    LanguageSwitch
  },
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
