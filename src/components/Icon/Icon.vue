<template>
  <i v-if="typeof value === 'number'" class="ico text-lena">{{value}}</i>
  <i v-else :class="`icon-${value}`" class="ico"/>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    value: {
      type: [String, Number],
      default: 'place',
    },
  },
};
</script>

<style lang="css" scoped>
.ico {
  line-height: 0;
}
</style>
