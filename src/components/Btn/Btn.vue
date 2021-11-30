<template>
  <button
    class="rounded-full w-full p-2 border
           text-lg uppercase font-open-sans font-semibold text-2xl
           transition-colors duration-700 transform focus:outline-none"
    v-bind:class="getScheme(this.outlined? 'outlined': 'default')"
  >
    <slot/>
  </button>
</template>

<script>
import scheme from './Btn.color';
import ColorScheme from '../../mixins/ColorScheme';

const outlined = {
  type: Boolean,
  default: false,
};
const color = scheme.prop;

export default {
  props: { outlined, color },
  mixins: [ColorScheme],
  created() {
    this.initScheme(scheme);
  },
};
</script>
