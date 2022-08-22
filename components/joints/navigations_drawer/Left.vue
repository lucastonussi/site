<template lang="pug">
v-navigation-drawer(:clipped='clipped' v-model='drawer' fixed app)
  v-list
    v-list-tile(router :to='item.to' :key='i' v-for='(item, i) in items' exact)
      v-list-tile-action
        v-icon(v-html='item.icon')
      v-list-tile-content
        v-list-tile-title(v-text='item.title')
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ]
    }
  },
  computed: {
    ...mapState({
      uiState: 'ui'
    }),
    drawer() {
      return this.uiState.navigationDrawer.leftOpen
    }
  },
  methods: {
    ...mapMutations({
      toggleNagivationDrawerLeft: 'ui/toggleNagivationDrawerLeft'
    }),
    toggleNavLeft() {
      this.toggleNagivationDrawerLeft()
    }
  }
}
</script>
