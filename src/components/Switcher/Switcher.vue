<template>
  <div
    class="flex flex-col cursor-pointer"
    @click="$emit('update:modelValue', modelValue === 'map'? 'list': 'map')"
  >
    <Icon
      value="map"
      class="text-base"
      :class="getScheme(modelValue === 'map'? 'active': 'not-active')"
    />
    <Icon
      value="list"
      class="text-base mt-3"
      :class="getScheme(modelValue === 'list'? 'active': 'not-active')"
    />
  </div>
</template>

<script>
import scheme from './Switcher.color';
import ColorScheme from '../../mixins/ColorScheme';
import Icon from '../Icon/Icon';
import oneOfArray from '../../utils/validators/oneOfArray';

export const modes = ['map', 'list'];

const modelValue = {
  type: String,
  required: true,
  validator: oneOfArray(modes)
};
const color = scheme.prop;

export default {
  name: 'Switcher',
  components: { Icon },
  mixins: [ColorScheme],
  props: { modelValue, color },
  created() {
    this.initScheme(scheme);
  },
};
</script>
