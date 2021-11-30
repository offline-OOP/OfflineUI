<template>
  <input
    class="rounded-full h-8 w-8 border"
    :class="getScheme()"
    type="checkbox"
    disabled
  />
</template>

<script>
import scheme from './Step.color.ts';
import ColorScheme from '../../mixins/ColorScheme.vue';

const color = scheme.prop;

export default {
  name: 'Step',
  mixins: [ColorScheme],
  props: { color },
  created() {
    this.initScheme(scheme);
  },
};
</script>
