<template lang='pug'>
v-app(:dark='contrast')
  slot(name='top')
  slot(name='left')
  slot(name='middle')
  slot(name='right')
  slot(name='bottom')
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      uiState: 'ui'
    }),
    contrast() {
      return this.uiState.contrast
    }
  }
}
</script>
