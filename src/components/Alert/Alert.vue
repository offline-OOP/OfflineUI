<template>
  <div
    class="w-full rounded-3xl py-2 px-3 flex flex-row items-center"
    :class="getScheme()"
  >
    <icon
      class="text-xl"
      :value="icon"
    />
    <div class="font-montserrat text-xs ml-3">
      <p class="font-bold">
        <slot name="header"></slot>
      </p>

      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import scheme from './Alert.color';
import ColorScheme from '../../mixins/ColorScheme';
import Icon from '../Icon/Icon.vue';

const icon = {
  type: String,
};
const color = scheme.prop;

export default {
  name: 'Alert',
  components: { Icon },
  mixins: [ColorScheme],
  props: {
    icon,
    color,
  },
  created() {
    this.initScheme(scheme);
  },
};
</script>
