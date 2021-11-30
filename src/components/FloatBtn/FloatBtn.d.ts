import { VNode } from 'vue';

interface FloatBtnProps {
  color?: string;
  active?: boolean;
  disabled?: boolean;
}

declare class FloatBtn {
  $props: FloatBtnProps;

  $slot: {
    '': VNode[]
  };
}

export default FloatBtn;
