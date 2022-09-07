<template lang='pug'>
v-toolbar(fixed app :clipped-left='clipped')
  v-toolbar-side-icon(@click='toggleNavLeft()')

  v-spacer

  v-btn(icon @click.stop='toggleNavRight()')
    v-icon menu
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      title: 'App',
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    ...mapState({
      uiState: 'ui'
    })
  },
  methods: {
    ...mapMutations({
      toggleNagivationDrawerLeft: 'ui/toggleNagivationDrawerLeft',
      toggleNagivationDrawerRight: 'ui/toggleNagivationDrawerRight'
    }),
    toggleNavRight() {
      this.toggleNagivationDrawerRight()
      console.log(this.uiState.navigationDrawer.rightOpen)
    },
    toggleNavLeft() {
      this.toggleNagivationDrawerLeft()
      console.log(this.uiState.navigationDrawer.leftOpen)
    }
  }
}
</script>
