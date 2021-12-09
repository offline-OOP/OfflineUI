<template>
  <li class="list-none cursor-pointer">
    <router-link class="flex flex-col place-items-center" :to="to">
      <icon class="text-3xl" :class="getScheme('icon')" :value="icon"/>
      <p class="text-xs text-lena" :class="getScheme('text')"> <slot/> </p>
    </router-link>
  </li>
</template>

<script>
import scheme from './NavigationItem.color.ts';
import ColorScheme from '../../colors/ColorScheme';
import Icon from '../Icon/Icon';

const icon = {
  type: [String, Number],
};
const to = {
  type: String,
};

export default {
  name: 'NavigationItem',
  components: { Icon },
  mixins: [ColorScheme],
  props: {
    icon, to,
  },
  data: () => ({
    scheme
  }),
};
</script>
