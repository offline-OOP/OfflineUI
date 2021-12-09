import Card from "../../components/Card/Card";
import scheme from "../../components/Card/Card.color";
import {WHITE} from "../../colors/colors";

export default {
    title: 'Карточки/Card',
    component: Card,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Card},
    setup: () => ({...args}),
    template: `
      <Card :color="color">
        <template #header>
          some header
        </template>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        <template #footer>
          some footer
        </template>
      </Card>
    `
})
Default.args = {
    color: WHITE
}
