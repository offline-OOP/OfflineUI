import {default as Map} from "../../components/Map/Map";
import {default as MapMarker} from "../../components/Map/MapMarker";
import { load } from '@2gis/mapgl';
import {ACCENT, GRAY, INFO, SUCCESS} from "../../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Map/Map',
    component: Map,
    argTypes: {}
}

export const Default = () => ({
    components: {Map, MapMarker},
    data: () => ({
        loadMapApi: false,
        mapApi: null,
        accent: ACCENT,
        info: INFO,
        success: SUCCESS,
        gray: GRAY
    }),
    mounted() {
        load().then((api) => {
            this.mapApi = api
            this.loadMapApi = true
        });
    },
    template: `
      <div class="h-screen w-full">
        <Map v-if="loadMapApi" :map-api="mapApi">
          <template #controller/>
          <template #markers="{map}">

            <template v-if="map && mapApi">
              <MapMarker :map="map" :coordinates="[55.31878, 25.21584]" sponsor :map-api="mapApi" :color="info"/>
              <MapMarker :map="map" :coordinates="[55.31878, 25.23584]" :map-api="mapApi" :color="info"/>
              <MapMarker :map="map" :coordinates="[55.31140, 25.23584]" :map-api="mapApi" :color="accent"/>
              <MapMarker :map="map" :coordinates="[55.32878, 25.23584]" :map-api="mapApi" :color="gray"/>
              <MapMarker :map="map" :coordinates="[55.34878, 25.23584]" :map-api="mapApi" :color="success"/>
            </template>
            <p v-else>load...</p>

          </template>
        </Map>
        <p v-else>load...</p>
      </div>
    `
})
