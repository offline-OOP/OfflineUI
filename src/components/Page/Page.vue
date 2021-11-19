<template>
  <div class="w-screen h-screen overflow-y-scroll" :class="pageClass">

    <div :class="headerClass">
      <slot name="header"/>
    </div>

    <div :class="contentClass">
      <slot name="content"/>
    </div>

    <div :class="footerClass">
      <slot name="footer"/>
    </div>

  </div>
</template>

<script>
import {PageScheme as scheme} from "./Page.color.js";
import Color from "../../mixins/Color";

const pageClass = {
  type: String,
  required: false,
  default: 'bg-primary'
}

const contentClass = {
  type: String,
  required: false,
  default: 'p-4'
}

const headerClass = {
  type: String,
  required: false,
  default: ''
}

const footerClass = {
  type: String,
  required: false,
  default: ''
}

export default {
  name: "Page",
  components: {

  },
  mixins: [Color],
  props: {
    pageClass, contentClass, headerClass, footerClass
  },
  created() {
    this.initScheme(scheme)
  }
}
</script>
