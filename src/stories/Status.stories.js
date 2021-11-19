import {default as Status} from "../components/Status/Status";
import {StatusScheme as scheme} from "../components/Status/Status.color.js";
import {SUCCESS} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Status',
    component: Status,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Status},
    setup: () => ({...args}),
    template: `
      <Status :color="color">
        Сейчас активно
      </Status>
    `
})
Default.args = {
    color: SUCCESS
}
