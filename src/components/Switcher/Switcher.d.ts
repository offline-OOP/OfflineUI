interface SwitcherProps {
    color?: string;
    mode?: string;
}

declare class Switcher {
    $props: SwitcherProps;

    $emit(eventName: 'change-mode'): this;
}


export default Switcher
