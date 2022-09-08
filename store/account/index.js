export const state = () => ({
  name: 'alteza',
  language: 'br'
})

export const mutations = {
  setAccountLanguage(state, language) {
    state.language = language || 'br'
  }
}
