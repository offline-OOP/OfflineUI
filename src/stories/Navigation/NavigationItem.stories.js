import NavigationItem from '../../components/Navigation/NavigationItem';
import scheme from '../../components/Navigation/NavigationItem.color';
import { WHITE } from '../../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Navigation/NavigationItem',
  component: NavigationItem,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { NavigationItem },
  setup: () => ({ ...args }),
  template: `
      <NavigationItem :icon="icon" :color="color">
        terms
      </NavigationItem>
    `,
});
Default.args = {
  color: WHITE,
  icon: 'terms',
  to: '/terms',
};
