import Map from '../../components/Map/Map';
import MapMarker from '../../components/Map/MapMarker';
import {
  ACCENT, GRAY, INFO, SUCCESS,
} from '../../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Map/Map',
  component: Map,
  argTypes: {},
};

export const Default = () => ({
  components: { Map, MapMarker },
  data: () => ({
    accent: ACCENT,
    info: INFO,
    success: SUCCESS,
    gray: GRAY,
  }),
  template: `
      <div class="h-screen w-full">
        <Map>
          <template #controller/>

          <template v-if="$store.getters['map/hasMap']">
            <MapMarker :coords="[55.31878, 25.21584]" sponsor :color="info"/>
            <MapMarker :coords="[55.31878, 25.23584]" :color="info"/>
            <MapMarker :coords="[55.31140, 25.23584]" :color="accent"/>
            <MapMarker :coords="[55.32878, 25.23584]" :color="gray"/>
            <MapMarker :coords="[55.34878, 25.23584]" :color="success"/>
          </template>

        </Map>
      </div>
    `,
});
