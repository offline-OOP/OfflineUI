import {VNode} from 'vue'

interface CardProps {
    color?: String;
}

declare class Card {
    $props: CardProps;
    $slot: {
        '': VNode[],
        'header': VNode[],
        'footer': VNode[]
    };
    $emit(eventName: '', value: number): this;
}
export default Card;
