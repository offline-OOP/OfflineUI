import { VNode } from 'vue';

interface AlertProps {
  icon?: string;
  color?: string;
}

declare class Alert {
  $props: AlertProps;

  $slot: {
    'header': VNode[];
    '': VNode[];
  };
}

export default Alert;
