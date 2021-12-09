<template>
  <nav
    class="px-4 py-3 w-full h-16
           rounded-2xl flex flex-row
           items-center place-content-between
           shadow-md no-wrap"
    :class="getScheme()"
  >
    <slot name="start"/>
    <ul class="flex flex-row w-full place-content-around">
      <slot/>
    </ul>
    <slot name="end"/>
  </nav>
</template>

<script>
import scheme from './Navigation.color.ts';
import ColorScheme from '../../colors/ColorScheme';

export default {
  name: 'Navigation',
  mixins: [ColorScheme],
  data: () => ({
    scheme
  }),
};
</script>
