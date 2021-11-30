import { VNode } from 'vue';
import Chip from './Chip';

interface ChipGroupProps {
  color?: string;
}

declare class ChipGroup {
  $props: ChipGroupProps;

  $slot: {
    '': Chip[]
    'header': VNode[]
  };

  $emit(eventName: 'group-scroll', event: Event): this;
}

export default ChipGroup;
