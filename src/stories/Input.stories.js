import { default as Input, types } from "../components/Input/Input";
import {InputScheme as scheme} from "../components/Input/Input.color";
import {WHITE} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Input',
    component: Input,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: scheme.colors
        },
        id: {
            control: { type: 'text' }
        },
        type: {
            control: { type: 'select' },
            options: types
        },
        icon: {
            control: { type: 'text' }
        },
        placeholder: {
            control: { type: 'text' }
        }
    }
}

export const Default = (args) => ({
    components: {Input},
    setup: () => ({ ...args }),
    template: `
      <Input :id="id" :placeholder="placeholder" :color="color" :type="type"/>
    `
})
Default.args = {
    id: 'default',
    type: 'text',
    color: WHITE,
    placeholder: 'some placeholder'
}

export const WithIcon = (args) => ({
    components: {Input},
    setup: () => ({ ...args }),
    template: `
      <Input :id="id" :placeholder="placeholder" :color="color" :type="type" :icon="icon"/>
    `
})
WithIcon.args = {
    id: 'with-icon',
    color: WHITE,
    type: 'text',
    icon: 'at',
    placeholder: 'some placeholder'
}

