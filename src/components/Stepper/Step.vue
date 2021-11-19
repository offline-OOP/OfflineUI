<template>
  <input class="rounded-full h-8 w-8 border"
         :class="getScheme()" type="checkbox" disabled />
</template>

<script>
import {StepScheme as scheme} from "./Step.color";
import Color from "../../mixins/Color"

export default {
  name: "Step",
  mixins: [Color],
  props: {
    color: scheme.prop
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
