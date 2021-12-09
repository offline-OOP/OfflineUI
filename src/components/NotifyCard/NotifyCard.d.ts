import {VNode} from 'vue'
import Avatar from 'components/Avatar/Avatar';

interface NotifyCardProps {
    color?: string;
}

declare class NotifyCard {
    $props: NotifyCardProps;
    $slot: {
        'avatar': Avatar;
        '': VNode[];
        'controller': VNode;
        'time': VNode;
    };
}



export default NotifyCard
