<template>
  <div class="w-min h-6 rounded-full flex flex-row items-center" :class="getScheme('wrapper')">
    <template v-if="icon">
      <icon class="w-6 h-6 rounded-full text-xs flex items-center justify-center shadow -mx-1" :name="icon" :class="getScheme('icon')"/>
    </template>
    <div class="font-open-sans font-bold capitalize text-xs mx-2">
      <slot/>
    </div>
  </div>
</template>

<script>
import {ChipScheme as scheme} from "./Chip.color.js";
import Color from "../../mixins/Color";
import Icon from "../Icon/Icon";

const icon = {
  type: String,
  required: false,
  default: null
}
const color = scheme.prop

export default {
  name: "Chip",
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
