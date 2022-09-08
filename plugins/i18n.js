import en from '../locales/en.json'
import br from '../locales/br.json'

export default {
  locale: ['en', 'br'],
  defaultLocale: 'br',
  vueI18n: {
    fallbackLocale: 'br',
    messages: { en, br }
  }
}
