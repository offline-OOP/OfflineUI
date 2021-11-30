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
    mode: {
      control: { type: 'select' },
      options: modes,
    },
  },
};

export const Default = (args) => ({
  components: { Switcher },
  setup: () => ({ ...args }),
  template: `
      <Switcher :color="color" :mode="mode" />
    `,
});
Default.args = {
  color: ACCENT,
  mode: modes[0],
};
