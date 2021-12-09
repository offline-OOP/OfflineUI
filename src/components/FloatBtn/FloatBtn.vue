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

import ColorScheme from '../../colors/ColorScheme';
import scheme from './FloatBtn.color';

export default {
  name: 'FloatBtn',
  mixins: [ColorScheme],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    scheme
  })
};
</script>
