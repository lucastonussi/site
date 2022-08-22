<template lang="pug">
v-navigation-drawer(
  :right='right'
  v-model='drawer'
  fixed
)
  v-list
    v-list-tile
      v-list-tile-action
        v-btn(@click="onClick" color='primary')
          v-icon compare_arrows
      v-list-tile-title
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      fixed: true,
      right: true
    }
  },
  computed: {
    ...mapState({
      uiState: 'ui'
    }),
    drawer: {
      get() {
        return this.uiState.navigationDrawer.rightOpen || false
      },
      set() {}
    }
  },
  methods: {
    ...mapMutations({
      toggleNagivationDrawerRight: 'ui/toggleNagivationDrawerRight'
    }),
    toggleNavLeft() {
      this.toggleNagivationDrawerRight()
    },
    onClick() {
      this.toggleNagivationDrawerRight()
    }
  }
}
</script>
