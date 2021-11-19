<template>
  <div class="w-full rounded-3xl py-2 px-3 flex flex-row items-center" :class="getScheme()">
    <icon class="text-xl" :name="icon"/>
    <div class="font-montserrat text-xs ml-3">
      <p class="font-bold">
        <slot name="header"/>
      </p>

      <p>
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
import {AlertScheme as scheme} from "./Alert.color.js";
import Color from "../../mixins/Color";
import Icon from "../Icon/Icon";

const icon = {
  type: String
}
const color = scheme.prop

export default {
  name: "Alert",
  components: {Icon},
  mixins: [Color],
  props: {
    icon,
    color
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
