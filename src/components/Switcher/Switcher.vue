<template>
  <div class="flex flex-col cursor-pointer">
    <Icon name="map" class="text-base" :class="getScheme(mode === 'map'? 'active': 'not-active')" />
    <Icon name="list" class="text-base mt-3" :class="getScheme(mode === 'list'? 'active': 'not-active')"/>
  </div>
</template>

<script>
import {SwitcherScheme as scheme} from "./Switcher.color";
import Color from "../../mixins/Color";
import Icon from "../Icon/Icon";
import {oneOfArray} from "../../utils/props.validators";

export const modes = ['map', 'list']

const mode = {
  type: String,
  validator: oneOfArray(modes)
}
const color = scheme.prop

export default {
  name: "Switcher",
  components: {Icon},
  mixins: [Color],
  props: { mode, color },
  emits: ['change-mode'],
  created() {
    this.initScheme(scheme)
  }
}
</script>
