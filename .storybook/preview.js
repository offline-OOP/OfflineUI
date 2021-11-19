import '../src/style.css';
import { app } from '@storybook/vue3'
import { createI18n } from 'vue-i18n'
import messages from '../src/i18n/messages'

const i18n = createI18n({
  locale: 'ru',
  messages
})

app.use(i18n)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
