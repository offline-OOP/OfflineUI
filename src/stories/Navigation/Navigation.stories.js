import {default as Navigation} from "../../components/Navigation/Navigation";
import {NavigationScheme as scheme} from "../../components/Navigation/Navigation.color.js";
import {WHITE} from "../../utils/ColorSchemeManager";
import NavigationItem from "../../components/Navigation/NavigationItem";
import Switcher from "../../components/Switcher/Switcher";

export default {
    title: 'Компоненты/Navigation/Navigation',
    component: Navigation,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: scheme.colors
        },
    }
}

export const Default = (args) => ({
    components: {Navigation, NavigationItem},
    setup: () => ({...args}),
    template: `
      <Navigation :color="color" >
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
    `
})
Default.args = {
    color: WHITE
}

export const End = (args) => ({
    components: {Navigation, NavigationItem, Switcher},
    setup: () => ({...args}),
    template: `
      <Navigation :color="color" >
        <NavigationItem icon="map-time" :color="color">
          line-up
        </NavigationItem>
        <NavigationItem icon="money" :color="color">
          price
        </NavigationItem>
        <NavigationItem icon="terms" :color="color">
          terms
        </NavigationItem>
        <template #end>
          <Switcher color="accent" mode="map"/>
        </template>
      </Navigation>
    `
})
End.args = {
    color: WHITE
}
