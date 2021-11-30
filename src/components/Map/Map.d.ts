import MapController from './MapController';
import MapMarker from './MapMarker';

declare class Map {
    $slot: {
        'controller': MapController,
        '': MapMarker[]
    }
}

export default Map
