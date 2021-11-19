import {default as Avatar} from "../components/Avatar/Avatar";
import {AvatarScheme as scheme} from "../components/Avatar/Avatar.color.js";
import {ACCENT} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Avatar',
    component: Avatar,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Avatar},
    setup: () => ({...args}),
    template: `
      <Avatar :color="color" />
    `
})
Default.args = {
    color: ACCENT
}
