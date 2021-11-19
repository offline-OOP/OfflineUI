import Stepper from '../../components/Stepper/Stepper.vue'
import {StepperScheme as scheme} from "../../components/Stepper/Stepper.color";
import {INFO} from "../../utils/ColorSchemeManager"

export default {
    title: 'Компоненты/Stepper/Stepper',
    component: Stepper,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: scheme.colors
        }
    }
}

export const Vertical = (args) => ({
    components: {Stepper},
    setup: () => ({ ...args }),
    template: `<Stepper class="h-96" :vertical="vertical" :count="count" :step="step" :color="color"/>`
})
Vertical.args = {
    count: 3,
    step: 2,
    color: INFO,
    vertical: true
}


export const Horizontal = (args) => ({
    components: {Stepper},
    setup: () => ({ ...args }),
    template: `<Stepper class="h-48" :vertical="vertical" :count="count" :step="step" :color="color"/>`
})
Horizontal.args = {
    count: 3,
    step: 2,
    color: INFO,
    vertical: false
}
