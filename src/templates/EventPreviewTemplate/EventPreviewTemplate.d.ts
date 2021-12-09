import {VNode} from 'vue'
import Avatar from '../../components/Avatar/Avatar';

declare class EventPreviewTemplate {
    $slot: {
        'avatar': Avatar;
        '': VNode[];
        'controller': VNode;
        'time': VNode;
    };
}

export default EventPreviewTemplate
