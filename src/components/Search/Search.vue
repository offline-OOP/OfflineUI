<template>
  <Input
    id="search"
    class="ring-1 ring-gray"
    autofocus
    :autocomplete="false"
    :color="color"
    type="text"
    placeholder="Search..."
  />
</template>

<script>
import scheme from '../Input/Input.color';
import ColorScheme from '../../mixins/ColorScheme';
import Input from '../Input/Input';

const color = scheme.prop;

export default {
  name: 'Search',
  components: { Input },
  mixins: [ColorScheme],
  props: {
    color,
  },
  created() {
    this.initScheme(scheme);
  },
};
</script>
