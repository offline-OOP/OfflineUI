<template>

</template>

<script>
import {AvatarScheme as scheme} from "./Avatar.color.js";
import Color from "../../mixins/Color";

export default {
  name: "Avatar",
  components: {},
  mixins: [Color],
  props: {},
  created() {
    this.initScheme(scheme)
  }
}
</script>
