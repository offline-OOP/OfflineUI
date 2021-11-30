import '../src/style.css';
import {app} from '@storybook/vue3';
import {createStore} from 'vuex';
import map from '../src/store/map';

const store = createStore({
  modules: {
    map
  }
})

app.use(store)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
