<template lang='pug'>
v-toolbar(fixed app :clipped-left='clipped')
  v-toolbar-side-icon(@click='toggleNavLeft()')
  v-btn(color='primary')
    | Dashboard 1
  v-btn(color='primary')
    | Dashboard 2
  v-btn(color='primary')
    | Dashboard 3
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
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
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
