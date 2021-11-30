<template>
  <div/>
</template>

<script>
import scheme from './Avatar.color.ts';
import ColorScheme from '../../mixins/ColorScheme';

export default {
  name: 'Avatar',
  components: {},
  mixins: [ColorScheme],
  props: {},
  created() {
    this.initScheme(scheme);
  },
};
</script>
