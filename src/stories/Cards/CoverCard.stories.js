import CoverCard from "../../components/CoverCard/CoverCard";
import scheme from "../../components/CoverCard/CoverCard.color";
import {ACCENT} from "../../colors/colors";

export default {
    title: 'Карточки/CoverCard',
    component: CoverCard,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {CoverCard},
    setup: () => ({...args}),
    template: `
      <CoverCard :color="color" />
    `
})
Default.args = {
    color: ACCENT
}
