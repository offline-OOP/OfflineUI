import Map from '../../components/Map/Map';
import MapMarker from '../../components/Map/MapMarker';
import MapController from "../../components/Map/MapController";
import {
  ACCENT, GRAY, INFO, SUCCESS,
} from '../../utils/ColorSchemeManager';

export default {
  title: 'Компоненты/Map/Map',
  component: Map,
  argTypes: {},
};

export const Default = () => ({
  components: { Map, MapMarker, MapController },
  data: () => ({
    accent: ACCENT,
    info: INFO,
    success: SUCCESS,
    gray: GRAY,
    action: 'filter'
  }),
  template: `
      <div class="h-screen w-full">
        <Map>
          <template #controller>
            <MapController v-model="action"/>
          </template>

          <template v-if="$store.getters['map/hasMap']">
            <MapMarker 
              icon="at" 
              :img="{ 
                src: 'https://img.gazeta.ru/files3/646/13669646/spaceper-pic_32ratio_900x600-900x600-90794.jpg', 
                alt: '' 
              }" 
              :coords="[55.31878, 25.21584]" 
              sponsor 
              :color="info"
            />
            <MapMarker
              icon="account"
              :img="{ 
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6-wlJMazv2dPqCnmjIUZSq9dU-LH6THoHbV6BuLiBRG_qjk9akIlVlMw1vt3KnxMUQM&usqp=CAU', 
                alt: '' 
              }" 
              :coords="[55.31878, 25.23584]" 
              :color="info"
            />
            <MapMarker
              icon="map"
              :img="{ 
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXQ_Ip-0bMcGaOo2eNd_-iV6bUWtrwd5ocBRoBV4KzLGJ6G86kP7wuCBS0O1wblf-mtc&usqp=CAU', 
                alt: '' 
              }"  
              :coords="[55.31140, 25.23584]" 
              :color="accent"
            />
            <MapMarker
              icon="mail"
              :img="{ 
                src: 'https://img.gazeta.ru/files3/646/13669646/spaceper-pic_32ratio_900x600-900x600-90794.jpg', 
                alt: '' 
              }"  
              :coords="[55.32878, 25.23584]" 
              :color="gray"
            />
            <MapMarker
              icon="list"
              :img="{ 
                src: 'https://img.gazeta.ru/files3/646/13669646/spaceper-pic_32ratio_900x600-900x600-90794.jpg', 
                alt: '' 
              }" 
              :coords="[55.34878, 25.23584]" 
              :color="success"
            />
          </template>

        </Map>
      </div>
    `,
});
