<template lang='pug'>
v-footer(:fixed='fixed' app height='200px')
  v-container(fluid)
    v-row
      v-col
        span &copy; {{ new Date().getFullYear() }}
    v-row
      v-col
        v-switch(v-model='contrast' @click='toggleContrast' append-icon='nightlight' prepend-icon='lightbulb')
    v-row
      v-col.d-flex(md='4')
        v-select(
          v-model='account.language'
          :items='locales.languageOptions'
          item-text='text'
          item-value='value'
          prepend-icon='translate'
        )
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      fixed: true
    }
  },
  computed: {
    ...mapState({
      contrast: 'ui/contrast',
      locales: 'locales',
      account: 'account'
    })
  },
  watch: {
    'account.language': {
      immediate: true,
      handler() {
        this.setAccountLanguage(this.account.language)
        this.$i18n.setLocale(this.account.language)
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleContrast: 'ui/toggleContrast',
      setAccountLanguage: 'account/setAccountLanguage'
    })
  }
}
</script>
