import Search from '../components/Search/Search';
import scheme from '../components/Input/Input.color';
import { WHITE } from '../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Search',
  component: Search,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { Search },
  setup: () => ({ ...args }),
  template: `
      <Search :color="color" />
    `,
});
Default.args = {
  color: WHITE,
};
