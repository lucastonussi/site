<template lang="pug">
v-navigation-drawer(:clipped='clipped' v-model='drawer' fixed app)
  v-list
    v-list-tile(router :to='item.to' :key='i' v-for='(item, i) in items' exact)
      v-list-tile-action
        v-icon(v-html='item.icon')
      v-list-tile-content
        v-list-tile-title(v-text='$t(item.title)')
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      items: [
        { icon: 'apps', title: 'generals.toolbar.left.welcome', to: '/' },
        { icon: 'bubble_chart', title: 'generals.toolbar.left.inspire', to: '/inspire' },
        { icon: 'favoriteairplanemode_active', title: 'generals.toolbar.left.marina', to: '/marina' },
        { icon: 'pets', title: 'generals.toolbar.left.adoptpet', to: '/adoptpet' },
        { icon: 'home_work', title: 'generals.toolbar.left.fundos', to: '/fundos' },
        { icon: 'colorizeshield', title: 'generals.toolbar.left.guilherme', to: '/guilherme' },
        { icon: 'baby_changing_station', title: 'generals.toolbar.left.babycarespot', to: '/babycarespot' },
        { icon: 'api', title: 'generals.toolbar.left.apidocs', to: '/apidocs' },
        { icon: 'searchauto_stories', title: 'generals.toolbar.left.discovery', to: '/discover' }
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
