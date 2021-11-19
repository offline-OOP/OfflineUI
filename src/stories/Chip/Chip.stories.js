import {default as Chip} from "../../components/Chip/Chip";
import {ChipScheme as scheme} from "../../components/Chip/Chip.color.js";
import {ACCENT, GRAY} from "../../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Chip/Chip',
    component: Chip,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Chip},
    setup: () => ({...args}),
    template: `
      <Chip :icon="icon" :color="color">
        offline
      </Chip>
    `
})
Default.args = {
    color: GRAY,
    icon: 'at'
}

export const Active = (args) => ({
    components: {Chip},
    setup: () => ({...args}),
    template: `
      <Chip :icon="icon" :color="color">
        offline
      </Chip>
    `
})
Active.args = {
    color: ACCENT,
    icon: 'at'
}


export const NoIcon = (args) => ({
    components: {Chip},
    setup: () => ({...args}),
    template: `
      <Chip :color="color">
        offline
      </Chip>
    `
})
NoIcon.args = {
    color: ACCENT
}


