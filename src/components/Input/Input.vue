<template>
  <div
    class="flex flex-row place-items-center rounded-full p-3"
    :class="getScheme('div')"
  >
    <label v-if="icon" :for="id">
      <icon
        :id="`icon-${id}`"
        :name="icon"
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
import {InputScheme as scheme} from "./Input.color";
import Color from "../../mixins/Color"
import {oneOfArray} from "../../utils/props.validators";
import Icon from "../Icon/Icon";

export const types = ['text', 'email', 'tel', 'date', 'datetime-local', 'file', 'url', 'password']

const id = {
  type: String
}
const type = {
  type: String,
  validator: (value) => {
    oneOfArray(types)
  }
}
const color = scheme.prop

const icon = {
  type: String
}
const placeholder = {
  type: String
}
const autofocus = {
  type: Boolean,
  default: false
}
const autocomplete = {
  type: Boolean,
  default: true
}

export default {
  name: "Input",
  components: {Icon},
  mixins: [Color],
  props: { id, type, color, icon, placeholder, autofocus, autocomplete },
  created() {
    this.initScheme(scheme)
  }
}
</script>
