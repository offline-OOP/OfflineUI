<template>
  <div class="w-full h-full relative">
    <div class="w-full h-full" ref="map"/>
    <div class="absolute right-0 bottom-24 z-50 flex flex-col justify-items-end">
      <slot name="controller"/>
    </div>
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
