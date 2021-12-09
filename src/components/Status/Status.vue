<template>
  <div
    class="w-min h-2 flex flex-row items-center"
    :class="getScheme()"
  >
    <div
      class="w-2 h-2 rounded-full"
      :class="getScheme('point')"
    />
    <div class="font-lena whitespace-nowrap lowercase text-xs ml-2 text-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
import scheme from './Status.color';
import ColorScheme from '../../colors/ColorScheme';

export default {
  name: 'Chip',
  mixins: [ColorScheme],
  data: () => ({
    scheme
  }),
};
</script>
