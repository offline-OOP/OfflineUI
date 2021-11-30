import {VNode} from 'vue'
import NavigationItem from './NavigationItem';

interface NavigationProps {
    color?: string;
}

declare class Navigation {
    $props: NavigationProps;
    $slot: {
        'start': VNode[]
        '': NavigationItem[]
        'end': VNode[]
    }
}


export default Navigation
