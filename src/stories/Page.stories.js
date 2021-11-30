import Page from '../components/Page/Page';
import scheme from '../components/Page/Page.color';
import { ACCENT } from '../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Page',
  component: Page,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { Page },
  setup: () => ({ ...args }),
  template: `
      <Page :color="color" />
    `,
});
Default.args = {
  color: ACCENT,
};
