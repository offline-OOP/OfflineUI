import {default as Search} from "../components/Search/Search";
import {InputScheme as scheme} from "../components/Input/Input.color.js";
import {WHITE} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Search',
    component: Search,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Search},
    setup: () => ({...args}),
    template: `
      <Search :color="color" />
    `
})
Default.args = {
    color: WHITE
}
