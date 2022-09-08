import en from '../locales/en.json'
import ptbr from '../locales/ptbr.json'

export default {
  locale: 'en',
  defaultLocale: 'ptbr',
  vueI18n: {
    fallbackLocale: 'ptbr',
    messages: { en, ptbr }
  }
}
