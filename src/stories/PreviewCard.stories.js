import PreviewCard from "../components/PreviewCard/PreviewCard";
import scheme from "../components/PreviewCard/PreviewCard.color";
import {ACCENT} from "../colors/colors";

export default {
    title: 'Компоненты/PreviewCard',
    component: PreviewCard,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {PreviewCard},
    setup: () => ({...args}),
    template: `
      <PreviewCard :color="color" />
    `
})
Default.args = {
    color: ACCENT
}
