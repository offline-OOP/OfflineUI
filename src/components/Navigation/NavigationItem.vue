<template>
  <li class="list-none cursor-pointer">
    <router-link class="flex flex-col place-items-center" :to="to">
      <icon class="text-3xl" :class="getScheme('icon')" :name="icon"/>
      <p class="text-xs text-lena" :class="getScheme('text')"> <slot/> </p>
    </router-link>
  </li>
</template>

<script>
import {NavigationItemScheme as scheme} from "./NavigationItem.color.js";
import Color from "../../mixins/Color";
import Icon from "../Icon/Icon";

const icon = {
  type: String
}
const to = {
  type: String
}
const color = scheme.prop

export default {
  name: "NavigationItem",
  components: {Icon},
  mixins: [Color],
  props: {
    icon, to, color
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
