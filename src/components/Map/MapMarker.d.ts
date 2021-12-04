import IImg from "src/utils/IImg";

interface MapMarkerProps {
    color?: string;
    coords: [Number, Number];
    icon: string;
    img: IImg;
    sponsor?: Boolean;
}

declare class MapMarker {
    $props: MapMarkerProps;
}

export default MapMarker
