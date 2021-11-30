import Avatar from '../components/Avatar/Avatar';
import scheme from '../components/Avatar/Avatar.color';
import { ACCENT } from '../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { Avatar },
  setup: () => ({ ...args }),
  template: `
      <Avatar :color="color" />
    `,
});
Default.args = {
  color: ACCENT,
};
