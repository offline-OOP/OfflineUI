import MapController, {actions} from '../../components/Map/MapController';
import scheme from '../../components/Map/MapController.color';
import { WHITE } from '../../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Map/MapController',
  component: MapController,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
    modelValue: {
      control: { type: 'select' },
      options: ['', ...actions]
    }
  },
};

export const Default = (args) => ({
  components: { MapController },
  setup: () => ({ ...args }),
  template: `
      <MapController v-model='modelValue' :color="color" />
    `,
});
Default.args = {
  color: WHITE,
  modelValue: 'filter',
};
