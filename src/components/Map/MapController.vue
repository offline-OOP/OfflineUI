<template>
  <div class="flex flex-col">
    <FloatBtn
      v-for="action in actions"
      :key="'map-controller-' + action"
      :color="color" class="shadow-md my-3"
      :active="action === activeAction"
      @click="$emit(action)"
    >

      <icon :name="action"/>
    </FloatBtn>
  </div>
</template>

<script>
import {MapControllerScheme as scheme} from "./MapController.color.js";
import Color from "../../mixins/Color";
import FloatBtn from "../FloatBtn/FloatBtn";
import Icon from "../Icon/Icon";

const color = scheme.prop

export default {
  name: "MapController",
  components: {Icon, FloatBtn},
  mixins: [Color],
  data: () => ({
    actions: ['search', 'location', 'filter']
  }),
  props: {
    color,
    activeAction: {
      type: String,
      default: ''
    }
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
