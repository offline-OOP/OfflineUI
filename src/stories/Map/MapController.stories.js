import MapController from '../../components/Map/MapController';
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
  },
};

export const Default = (args) => ({
  components: { MapController },
  setup: () => ({ ...args }),
  template: `
      <MapController :active-action='activeAction' :color="color" />
    `,
});
Default.args = {
  color: WHITE,
  activeAction: 'filter',
};
