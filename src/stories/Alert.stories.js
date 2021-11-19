import {default as Alert} from "../components/Alert/Alert";
import {AlertScheme as scheme} from "../components/Alert/Alert.color.js";
import {INFO} from "../utils/ColorSchemeManager";

export default {
    title: 'Компоненты/Alert',
    component: Alert,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Alert},
    setup: () => ({...args}),
    template: `
      <Alert :icon="icon" :color="color">
        <template #header>Header</template>
        Some content
      </Alert>
    `
})
Default.args = {
    color: INFO,
    icon: 'at'
}
