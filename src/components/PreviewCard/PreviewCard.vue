<template>
  <div/>
</template>

<script>
import scheme from "./PreviewCard.color";
import ColorScheme from "../../colors/ColorScheme";

export default {
  name: "PreviewCard",
  components: {},
  mixins: [ColorScheme],
  props: {},
  data: () => ({
    scheme
  })
}
</script>
