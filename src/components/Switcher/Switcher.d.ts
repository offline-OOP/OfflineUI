interface SwitcherProps {
    color?: string;
    modelValue: string;
}

declare class Switcher {
    $props: SwitcherProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}


export default Switcher
