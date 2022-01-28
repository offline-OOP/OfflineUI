import {VNode} from 'vue'

interface SectionCardProps {
    color?: String;
}

declare class SectionCard {
    $props: SectionCardProps;
    $slot: {
        '': VNode[]
    };

    $emit(eventName: '', value: number): this;
}


export default SectionCard
