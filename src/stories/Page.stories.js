import {default as Page} from "../components/Page/Page";
import {PageScheme as scheme} from "../components/Page/Page.color.js";
import {ACCENT} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Page',
    component: Page,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Page},
    setup: () => ({...args}),
    template: `
      <Page :color="color" />
    `
})
Default.args = {
    color: ACCENT
}
