import {VNode} from 'vue'
import Avatar from '../../components/Avatar/Avatar';

declare class EventLineUpTemplate {
    $slot: {
        'avatar': Avatar;
        '': VNode[];
        'controller': VNode;
        'time': VNode;
    };
}

export default EventLineUpTemplate
