<template>
  <Input id="search" autofocus :autocomplete="false" :color="color" type="text" placeholder="Search..." color="" class="ring-1 ring-gray" />
</template>

<script>
import {InputScheme as scheme} from "../Input/Input.color";
import Color from "../../mixins/Color";
import Input from "../Input/Input"

const color = scheme.prop

export default {
  name: "Search",
  components: {Input},
  mixins: [Color],
  props: {
    color
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
