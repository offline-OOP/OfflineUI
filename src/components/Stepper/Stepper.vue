<template>
  <div
    class="flex place-between place-items-center no-wrap"
    :class="[vertical? 'flex-col': 'flex-row']"
  >
    <template v-for="(n, index) in count" :key="`step-${index}`">
      <Step
        :color="color"
        :checked="n < step"
      />
      <div
        class="border m-2 last:h-0 last:hidden"
        :class="[getScheme(), vertical? 'w-0 h-full': 'h-0 w-full']"
      />
    </template>
  </div>
</template>

<script>
import scheme from './Stepper.color';
import ColorScheme from '../../colors/ColorScheme';
import Step from './Step';

const count = {
  type: Number,
};
const step = {
  type: Number,
};
const vertical = {
  type: Boolean,
  default: false,
};

export default {
  name: 'Stepper',
  components: { Step },
  mixins: [ColorScheme],
  props: {
    count, step, vertical,
  },
  data: () => ({
    scheme
  }),
};
</script>
