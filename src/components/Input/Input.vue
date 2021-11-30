<template>
  <div
    class="flex flex-row place-items-center rounded-full p-3"
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
      :placeholder="placeholder"
      class="w-full h-6 font-montserrat font-light text-sm border-none focus:ring-0"
      :class="getScheme('input')"
    >
  </div>
</template>

<script>
import scheme from './Input.color';
import ColorScheme from '../../mixins/ColorScheme';
import { oneOfArray } from '../../utils/props.validators';
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
};
const type = {
  type: String,
  validator: (value) => {
    oneOfArray(types);
  },
};
const color = scheme.prop;

const icon = {
  type: String,
};
const placeholder = {
  type: String,
};

export default {
  name: 'Input',
  components: { Icon },
  mixins: [ColorScheme],
  props: {
    id, type, color, icon, placeholder, autofocus, autocomplete,
  },
  created() {
    this.initScheme(scheme);
  },
};
</script>
