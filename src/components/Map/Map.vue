<template>
  <div class="w-full h-full">
    <div class="w-full h-full" ref="map"/>
    <slot name="controller"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Map',
  mounted() {
    this.$store.dispatch('map/init', this.$refs.map)
  },
};
</script>
