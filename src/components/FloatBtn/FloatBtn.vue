<template>
  <button
      :class="getScheme(active? 'active': 'default')"
      class="h-10 w-10 rounded-full flex focus:outline-none place-content-center px-auto place-items-center
      text-2xl font-lena disabled:bg-secondary disabled:text-gray"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>

import Color from "../../mixins/Color";
import {FloatBtnScheme as scheme} from "./FloatBtn.color";

const color = scheme.prop

export default {
  name: "FloatBtn",
  mixins: [Color],
  props: {
    color,
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
