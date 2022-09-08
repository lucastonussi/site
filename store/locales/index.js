export const state = () => ({
  lang: 'pt_br'
})

export const mutations = {
  switchLocalePath(state, lang) {
    state.lang = lang
  }
}
