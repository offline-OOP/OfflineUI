import ProfileSocialTemplate from "../../templates/ProfileSocialTemplate/ProfileSocialTemplate";
import Avatar from "../../components/Avatar/Avatar";
import Card from "../../components/Card/Card";
import scheme from "../../components/Card/Card.color";
import {WHITE} from "../../colors/colors";

export default {
    title: 'Шаблоны/ProfileSocialTemplate',
    component: ProfileSocialTemplate,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Placeholder = (args) => ({
    components: {ProfileSocialTemplate},
    setup: () => ({...args}),
    template: `
      <ProfileSocialTemplate />
    `
})

export const InCard = (args) => ({
    components: {ProfileSocialTemplate, Card, Avatar},
    data: () => ({
        img: {
            src: 'https://www.photogorky.ru/photos/f1ac8ec12016c5a9777f8c8f77aec48b.jpg',
            alt: 'Пример'
        },
        size: 'md',
        to: '/',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt ' +
            'nostrud amet.',
        time: '15:26'
    }),
    setup: () => ({...args}),
    created() {
        setTimeout(() => {
            this.isLoad = true
        }, 5000)
    },
    template: `
      <Card :color="color">
        <ProfileSocialTemplate :color="color">
          <template #avatar>
            <Avatar v-if="isLoad" :to="to" :size="size" :img="img"/>
          </template>
          <template v-if="isLoad">
              {{text}}
            </template>
            <template #time>
              <template v-if="isLoad">
                {{time}}
              </template>
            </template>
          </ProfileSocialTemplate>
      </Card>
    `
})
InCard.args = {
    color: WHITE,
    isLoad: false
}
