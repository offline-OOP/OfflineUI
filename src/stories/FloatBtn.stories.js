import FloatBtn from '../components/FloatBtn/FloatBtn.vue'
import {FloatBtnScheme as scheme} from "../components/FloatBtn/FloatBtn.color";
import {WHITE} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/FloatBtn',
    component: FloatBtn,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {FloatBtn},
    setup: () => ({ ...args }),
    template: `<FloatBtn :color="color" class="shadow-md">23</FloatBtn>`
})
Default.args = {
    color: WHITE
}
