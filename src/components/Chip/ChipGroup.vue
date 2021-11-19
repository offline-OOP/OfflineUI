<template>
  <div class="w-full">
    <p class="font-bold font-open-sans text-xs mb-1 uppercase" :class="getScheme()">
      <slot name="header"/>
    </p>
    <div class="w-full p-1 overflow-y-scroll scrollbar-hide flex flex-row gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {ChipGroupScheme as scheme} from "./ChipGroup.color.js";
import Color from "../../mixins/Color";

const color = scheme.prop

export default {
  name: "ChipGroup",
  components: {},
  mixins: [Color],
  props: {
    color
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
