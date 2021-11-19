<template>
  <div class="w-full h-full">
    {{key}}
    <div class="w-full h-full" ref="map"/>
    <slot name="controller"/>
    <slot name="markers" :map="map"/>
  </div>
</template>

<script>
const mapApi = {
  type: Object,
  required: true,
  default: null
}

export default {
  name: "Map",
  components: {},
  props: {
    mapApi
  },
  data: () => ({
    map: null
  }),
  methods: {
    async initMap () {
      this.map = new this.mapApi.Map(this.$refs.map, {
        center: [55.31878, 25.23584],
        copyright: 'topRight',
        zoom: 13,
        zoomControl: false,
        key: process.env.MAPGL_KEY
      });
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>
