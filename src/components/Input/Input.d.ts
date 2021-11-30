import { VNode } from 'vue';

interface InputProps {
  color?: string;

}

declare class Input {
  $props: InputProps;

  $slot: {
    '': VNode[]
  };
}

export default Input;
