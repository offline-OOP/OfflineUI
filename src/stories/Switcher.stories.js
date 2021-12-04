import Switcher, { modes } from '../components/Switcher/Switcher';
import scheme from '../components/Switcher/Switcher.color';
import { ACCENT } from '../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Switcher',
  component: Switcher,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
    modelValue: {
      control: { type: 'select' },
      options: modes,
    },
  },
};

export const Default = (args) => ({
  components: { Switcher },
  setup: () => ({
    ...args
  }),
  template: `
      <Switcher :color="color" v-model="modelValue" />
    `,
});
Default.args = {
  color: ACCENT,
  modelValue: modes[0],
};
