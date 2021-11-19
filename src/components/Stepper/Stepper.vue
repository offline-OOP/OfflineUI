<template>
  <div class="flex place-between place-items-center" :class="[vertical? 'flex-col': 'flex-row']">
    <template v-for="n in count">
      <Step
          :color="color"
          :checked="n < step"
      />
      <div class="border m-2 last:h-0 last:hidden" :class="[getScheme(), vertical? 'w-0 h-full': 'h-0 w-full']"/>
    </template>
  </div>
</template>

<script>
import {StepperScheme as scheme} from "./Stepper.color";
import Color from "../../mixins/Color";
import Step from "./Step";

export default {
  name: "Stepper",
  components: {Step},
  mixins: [Color],
  props: {
    count: Number,
    step: Number,
    color: scheme.prop,
    vertical: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>

