import EventMainCard from "../../components/EventMainCard/EventMainCard";
import Avatar from "../../components/Avatar/Avatar";
import scheme from "../../components/EventMainCard/EventMainCard.color";
import NavigationItem from "../../components/Navigation/NavigationItem";
import Navigation from "../../components/Navigation/Navigation";
import {WHITE} from "../../colors/colors";

export default {
    title: 'Карточки/EventMainCard',
    component: EventMainCard,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Placeholder = (args) => ({
    components: {EventMainCard},
    setup: () => ({...args}),
    template: `
      <EventMainCard :color="color" />
    `
})
Placeholder.args = {
    color: WHITE
}

export const Default = (args) => ({
    components: {EventMainCard, Avatar, Navigation, NavigationItem},
    data: () => ({
        name: 'Concert',
        appName: '@concert',
        img: {
            src: 'https://pro.culture.ru/uploads/d314bbd96d3780cb924db80fcdb2d807_w600_h600.jpeg',
            alt: 'Пример'
        },
        size: 'sm',
        to: '/',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt ' +
            'nostrud amet.',
    }),
    setup: () => ({...args}),
    created() {
        setTimeout(() => {
            this.isLoad = true
        }, 5000)
    },
    template: `
      <EventMainCard :color="color">
        <template #avatar>
          <Avatar v-if="isLoad" :to="to" :size="size" :img="img"/>
        </template>
        <template #name>
          <template v-if="isLoad">
            {{name}}
          </template>
        </template>
        <template #appName>
          <template v-if="isLoad">
            {{appName}}
          </template>
        </template>
        <template v-if="isLoad">
          {{text}}
        </template>
        <template #navigation>
          <Navigation v-if="isLoad" :color="color" >
            <NavigationItem icon="map-time" :color="color">
              line-up
            </NavigationItem>
            <NavigationItem icon="money" :color="color">
              price
            </NavigationItem>
            <NavigationItem icon="terms" :color="color">
              terms
            </NavigationItem>
            <NavigationItem icon="people" :color="color">
              people
            </NavigationItem>
            <NavigationItem icon="time-history" :color="color">
              story
            </NavigationItem>
          </Navigation>
        </template>
      </EventMainCard>
    `
})
Default.args = {
    color: WHITE,
    isLoad: false
}
