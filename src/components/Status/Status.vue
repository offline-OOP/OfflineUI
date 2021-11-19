<template>
  <div class="w-min h-2 flex flex-row items-center" :class="getScheme()">
    <div class="w-2 h-2 rounded-full" :class="getScheme('point')"/>
    <div class="font-lena whitespace-nowrap lowercase text-xs ml-2 text-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
import {StatusScheme as scheme} from "./Status.color";
import Color from "../../mixins/Color";

const color = scheme.prop

export default {
  name: "Chip",
  mixins: [Color],
  props: {
    color
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
