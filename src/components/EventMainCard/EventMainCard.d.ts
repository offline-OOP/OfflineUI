import {VNode} from 'vue'

interface EventMainCardProps {
    color?: String;
}

declare class EventMainCard {
    $props: EventMainCardProps;
    $slot: {
        '': VNode[]
    };

    $emit(eventName: '', value: number): this;
}


export default EventMainCard
