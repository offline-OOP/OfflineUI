import {VNode} from 'vue'

interface CoverCardProps {
    color?: String;
}

declare class CoverCard {
    $props: CoverCardProps;
    $slot: {
        '': VNode[]
    }

    $emit(eventName: '', value: number): this;
}


export default CoverCard
