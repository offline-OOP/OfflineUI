<template>
  <div class="w-full">
    <p
      class="font-bold font-open-sans text-xs mb-1 uppercase"
      :class="getScheme()"
    >
      <slot name="header"/>
    </p>
    <div
      class="w-full p-1 overflow-y-scroll scrollbar-hide flex flex-row gap-4"
      @scroll="fixGroupScroll"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import scheme from './ChipGroup.color';
import ColorScheme from '../../mixins/ColorScheme';

const color = scheme.prop;

export default {
  name: 'ChipGroup',
  mixins: [ColorScheme],
  props: {
    color,
  },
  emits: ['group-scroll'],
  created() {
    this.initScheme(scheme);
  },
  methods: {
    fixGroupScroll(event) {
      this.$emit('group-scroll', event);
    },
  },
};
</script>
