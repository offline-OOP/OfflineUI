import {default as Switcher, modes} from "../components/Switcher/Switcher";
import {SwitcherScheme as scheme} from "../components/Switcher/Switcher.color";
import {ACCENT} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Switcher',
    component: Switcher,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Switcher},
    setup: () => ({...args}),
    template: `
      <Switcher :color="color" />
    `
})
Default.args = {
    color: ACCENT
}

