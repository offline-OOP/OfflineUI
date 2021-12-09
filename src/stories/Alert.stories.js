import Alert from '../components/Alert/Alert';
import scheme from '../components/Alert/Alert.color';
import { INFO } from '../colors/colors';

export default {
  title: 'Компоненты/Alert',
  component: Alert,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { Alert },
  setup: () => ({ ...args }),
  template: `
      <Alert :icon="icon" :color="color">
        <template #header>Header</template>
        Some content
      </Alert>
    `,
});
Default.args = {
  color: INFO,
  icon: 'at',
};
