<template>
  <div/>
</template>

<script>
import scheme from "./CoverCard.color";
import ColorScheme from "../../colors/ColorScheme";

export default {
  name: "CoverCard",
  components: {},
  mixins: [ColorScheme],
  props: {},
  data: () => ({
    scheme
  })
}
</script>
