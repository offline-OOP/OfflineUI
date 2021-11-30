import { VNode } from 'vue';

interface ChipProps {
  color?: string;
  icon?: string;
}

declare class Chip {
  $props: ChipProps;

  $slot: {
    '': VNode[]
  };
}

export default Chip;
