<template>
  <div class="w-screen h-screen overflow-y-scroll scrollbar-hide" :class="pageClass">

    <div :class="headerClass">
      <slot name="header"/>
    </div>

    <div :class="contentClass">
      <slot/>
    </div>

    <div :class="footerClass">
      <slot name="footer"/>
    </div>

  </div>
</template>

<script>
import scheme from './Page.color.ts';
import ColorScheme from '../../mixins/ColorScheme';

const pageClass = {
  type: String,
  required: false,
  default: 'bg-primary',
};

const contentClass = {
  type: String,
  required: false,
  default: 'p-4',
};

const headerClass = {
  type: String,
  required: false,
  default: '',
};

const footerClass = {
  type: String,
  required: false,
  default: '',
};

export default {
  name: 'Page',
  mixins: [ColorScheme],
  props: {
    pageClass, contentClass, headerClass, footerClass,
  },
  created() {
    this.initScheme(scheme);
  },
};
</script>
