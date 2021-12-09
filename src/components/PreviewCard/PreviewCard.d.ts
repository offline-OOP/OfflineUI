import {VNode} from 'vue'

interface PreviewCardProps {
    color?: String;
}

declare class PreviewCard {
    $props: PreviewCardProps;
    $slot: {
        '': VNode[]
    }

    $emit(eventName: '', value: number): this;
}


export default PreviewCard
