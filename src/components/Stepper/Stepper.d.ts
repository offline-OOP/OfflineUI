interface StepperProps {
    color?: string;
    count?: number;
    step?: number;
    vertical?: boolean;
}

declare class Stepper {
    $props: StepperProps;
}


export default Stepper
