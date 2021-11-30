interface MapMarkerProps {
    color?: string;
    coords?: [Number, Number];
    sponsor?: Boolean;
}

declare class MapMarker {
    $props: MapMarkerProps;
}

export default MapMarker
