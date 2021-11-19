<template>
  <i v-if="typeof name === 'number'" class="ico text-lena">{{name}}</i>
  <i v-else :class="`icon-${name}`" class="ico"/>
</template>

<script>
export default  {
  name: "Icon",
  props: {
    name: {
      type: [String, Number],
      default: 'place'
    }
  }
}
</script>

<style lang="css" scoped>
.ico {
  line-height: 0;
}
</style>
