<template>
  <div class="flex flex-col justify-center">
    <FloatBtn
      v-for="action in actions"
      :key="'map-controller-' + action"
      :color="color"
      class="shadow-md m-3"
      :active="action === modelValue"
      @click="control(action)"
    >
      <icon :value="action"/>
    </FloatBtn>
  </div>
</template>

<script>
import scheme from './MapController.color';
import ColorScheme from '../../colors/ColorScheme';
import FloatBtn from '../FloatBtn/FloatBtn';
import Icon from '../Icon/Icon';

export const actions = ['search', 'location', 'filter']

const modelValue = {
  type: String,
  required: true
}

export default {
  name: 'MapController',
  components: { Icon, FloatBtn },
  mixins: [ColorScheme],
  props: {
    modelValue
  },
  data: () => ({
    actions,
    scheme
  }),
  methods: {
    control (action) {
      if (action === 'location')
        this.$emit('me')
      else if (this.modelValue === action)
        this.$emit('update:modelValue', '')
      else
        this.$emit('update:modelValue', action)
    }
  }
};
</script>
