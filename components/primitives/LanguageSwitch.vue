<template lang='pug'>
div
  h1 {{ $t('greeting') }}
  nuxt-link(v-if='$i18n.locale !== "en"' :to='switchLocalePath("en")')
    | English
  nuxt-link(v-if='$i18n.locale !== "pt_br"' :to='switchLocalePath("pt_br")')
    | Español
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  date() {
    return {}
  },
  methods: {
    ...mapMutations({
      switchLocalePath: 'locales/switchLocalePath'
    })
  }
}
</script>
