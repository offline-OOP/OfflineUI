import { VNode } from 'vue';

interface AlertProps {
  icon?: string;
  color?: string;
}

declare class Alert {
  $props: AlertProps;

  $slots: {
    'header': VNode[];
    '': VNode[];
  };
}

export default Alert;
