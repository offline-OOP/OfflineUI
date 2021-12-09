<template>
  <div class="rounded-lg shadow-md overflow-hidden flex flex-col p-0">
    <slot name="header"/>
    <div class="overflow-y-scroll px-4 py-2 scrollbar-hide">
      <slot/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script>
import scheme from "./Card.color";
import ColorScheme from "../../colors/ColorScheme";

export default {
  name: "Card",
  components: {},
  mixins: [ColorScheme],
  props: {},
  data: () => ({
    scheme
  }),
}
</script>
