<template>
  <Input
    v-model="model"
    id="search"
    class="ring-1 ring-gray"
    autofocus
    :autocomplete="false"
    :color="color"
    type="text"
    placeholder="Search..."
    @update:modelValue="$emit('update:modelValue', model)"
  />
</template>

<script>
import scheme from '../Input/Input.color';
import ColorScheme from '../../mixins/ColorScheme';
import Input from '../Input/Input';

const color = scheme.prop;

const modelValue = {
  type: String,
  required: true
};

export default {
  name: 'Search',
  components: { Input },
  mixins: [ColorScheme],
  props: {
    modelValue,
    color,
  },
  data: () => ({
    model: ''
  }),
  created() {
    this.initScheme(scheme);
  },
};
</script>
