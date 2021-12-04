interface MapControllerProps {
    color?: string;
    modelValue: string;
}

declare class MapController {
    $props: MapControllerProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}


export default MapController
