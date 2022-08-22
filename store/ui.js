export const state = () => ({
  navigationDrawer: {
    leftOpen: false,
    rightOpen: false
  },
  contrast: false
})

export const mutations = {
  toggleNagivationDrawerLeft(state) {
    state.navigationDrawer.leftOpen = !state.navigationDrawer.leftOpen
  },
  toggleNagivationDrawerRight(state) {
    state.navigationDrawer.rightOpen = !state.navigationDrawer.rightOpen
  },
  toggleContrast(state) {
    state.contrast = !state.contrast
  }
}
