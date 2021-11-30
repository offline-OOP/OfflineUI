import { VNode } from 'vue';

interface BtnProps {
  color?: string;
  outlined?: boolean;
}

declare class Btn {
  $props: BtnProps;

  $slot: {
    '': VNode[]
  };
}

export default Btn;
