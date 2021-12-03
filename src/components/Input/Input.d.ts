import { VNode } from 'vue';

interface InputProps {
  modelValue: string;
  autocomplete?: boolean;
  autofocus?: boolean;
  id: string;
  type?: string;
  color?: string;
  icon?: string;
  placeholder?: string;
}

declare class Input {
  $props: InputProps;
  $emit(eventName: 'update:modelValue', value: string): this;
  $slot: {
    '': VNode[]
  };
}

export default Input;
