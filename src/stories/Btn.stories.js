import Btn from '../components/Btn/Btn';
import scheme from '../components/Btn/Btn.color';
import { ACCENT } from '../colors/colors';

export default {
  title: 'Компоненты/Btn',
  component: Btn,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
    outlined: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = (args) => ({
  components: { Btn },
  setup: () => ({ ...args }),
  template: '<Btn :outlined="outlined" :color="color">{{label}}</Btn>',
});
Default.args = {
  label: 'Default',
  outlined: false,
  color: ACCENT,
};

export const Outlined = (args) => ({
  components: { Btn },
  setup: () => ({ ...args }),
  template: '<Btn :outlined="outlined" :color="color">{{label}}</Btn>',
});
Outlined.args = {
  label: 'Outlined',
  outlined: true,
  color: ACCENT,
};
