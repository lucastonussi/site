<template lang='pug'>
dash-group-layout
  template(slot='top')
    tool-bar
  template(slot='left')
    navigation-drawer-left
  template(slot='middle')
    main-content
  template(slot='right')
    navigation-drawer-right
  template(slot='bottom')
    footer
</template>

<script>
import DashGroupLayout from '@/components/groups/DashGroupLayout'
import NavigationDrawerLeft from '@/components/joints/navigations_drawer/Left'
import NavigationDrawerRight from '@/components/joints/navigations_drawer/Right'
import ToolBar from '@/components/joints/ToolBar'
import Footer from '@/components/joints/Footer'
import MainContent from '@/components/transitions/MainContent'

export default {
  components: {
    NavigationDrawerLeft,
    NavigationDrawerRight,
    ToolBar,
    Footer,
    MainContent,
    DashGroupLayout
  }
}
</script>
