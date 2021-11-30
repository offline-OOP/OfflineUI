import {VNode} from 'vue'

interface StatusProps {
    color?: string;
}

declare class Status {
    $props: StatusProps;
    $slot: {
        '': VNode[]
    }
}


export default Status
