<template>
  <div
    class="flex flex-row no-wrap place-items-center rounded-full p-3"
    :class="getScheme('div')"
  >
    <label v-if="icon" :for="id">
      <icon
        :id="`icon-${id}`"
        :value="icon"
        class="text-xl ml-1"
        :class="getScheme('icon')"
      />
    </label>
    <input
      :id="id"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      class="w-full h-6 font-montserrat font-light text-sm border-none focus:ring-0"
      :class="getScheme('input')"
      @input="$emit('update:modelValue', model)"
    >
  </div>
</template>

<script>
import scheme from './Input.color';
import ColorScheme from '../../colors/ColorScheme';
import oneOfArray from '../../utils/validators/oneOfArray';
import Icon from '../Icon/Icon';

export const types = ['text', 'email', 'tel', 'date', 'datetime-local', 'file', 'url', 'password'];

const autocomplete = {
  type: Boolean,
  default: true,
};
const autofocus = {
  type: Boolean,
  default: false,
};
const id = {
  type: String,
  required: true
};
const type = {
  type: String,
  default: 'text',
  validator: (value) => {
    oneOfArray(types);
  },
};
const icon = {
  type: String,
};
const placeholder = {
  type: String,
};
const modelValue = {
  type: String,
  required: true
};

export default {
  name: 'Input',
  components: { Icon },
  mixins: [ColorScheme],
  props: {
    modelValue, id, type, icon, placeholder, autofocus, autocomplete,
  },
  data: () => ({
    model: '',
    scheme
  })
};
</script>
