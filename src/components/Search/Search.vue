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
import ColorScheme from '../../colors/ColorScheme';
import Input from '../Input/Input';

const modelValue = {
  type: String,
  required: true
};

export default {
  name: 'Search',
  components: { Input },
  mixins: [ColorScheme],
  props: {
    modelValue
  },
  data: () => ({
    model: '',
    scheme
  }),
};
</script>
