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
import ColorScheme from '../../colors/ColorScheme.vue';

export default {
  name: 'Step',
  mixins: [ColorScheme],
  data: () => ({
    scheme
  }),
};
</script>
