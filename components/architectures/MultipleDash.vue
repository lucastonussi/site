<template lang='pug'>
dash-group-layout
  template(slot='top')
    tool-bar-component
  template(slot='left')
    navigation-drawer-left
  template(slot='middle')
    main-content
  template(slot='right')
    navigation-drawer-right
  template(slot='bottom')
    bottom-footer-component
</template>

<script>
import DashGroupLayout from '@/components/groups/DashGroupLayout'
import NavigationDrawerLeft from '@/components/joints/navigations_drawer/Left'
import NavigationDrawerRight from '@/components/joints/navigations_drawer/Right'
import ToolBarComponent from '@/components/joints/ToolBar'
import BottomFooterComponent from '@/components/joints/Footer'
import MainContent from '@/components/transitions/MainContent'

export default {
  components: {
    NavigationDrawerLeft,
    NavigationDrawerRight,
    ToolBarComponent,
    BottomFooterComponent,
    MainContent,
    DashGroupLayout
  }
}
</script>
