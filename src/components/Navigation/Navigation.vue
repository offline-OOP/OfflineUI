<template>
  <nav
    class="px-4 py-3 w-full h-16 rounded-2xl flex flex-row items-center place-content-between shadow-md"
    :class="getScheme()"
  >
    <slot name="start"/>
    <ul class="flex flex-row w-full place-content-around">
      <slot/>
    </ul>
    <slot name="end"/>
  </nav>
</template>

<script>
import {NavigationScheme as scheme} from "./Navigation.color.js";
import Color from "../../mixins/Color";

export default {
  name: "Navigation",
  mixins: [Color],
  props: { color: scheme.prop },
  created() {
    this.initScheme(scheme)
  }
}
</script>
