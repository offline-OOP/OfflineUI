<template>
  <div class="relative">
    <div class='pin bounce absolute' :class="[getScheme('marker'), sponsor? 'ring-2 ring-black': '']">
      <div class="content">
        <img class="img z-10 absolute rounded-full" src="http://vnvncconcerthall.ru/wp-content/uploads/2021/03/054.jpg" alt="test"/>
        <icon class="icon z-20 absolute w-5 h-5 rounded-full text-xs bg-white flex items-center justify-center shadow"
              name="at" :class="getScheme('icon')"/>
      </div>
    </div>
    <div class='pulse bg-gray'/>
  </div>
</template>

<script>
import {MapMarkerScheme as scheme} from "./MapMarker.color.js";
import Color from "../../mixins/Color";
import Icon from "../Icon/Icon";

const mapApi = {
  type: Object,
  required: true
}
const map = {
  type: Object,
  required: true
}
const coordinates = {
  type: Array,
  required: true
}
const sponsor = {
  type: Boolean,
  required: false,
  default: false
}
const color = scheme.prop

export default {
  name: "MapMarker",
  components: {Icon},
  mixins: [Color],
  props: {
    mapApi,
    map,
    color,
    coordinates,
    sponsor
  },
  data: () => ({
    marker: null,
  }),
  created() {
    this.initScheme(scheme)
  },
  mounted() {
    this.marker = new this.mapApi.HtmlMarker(this.map, {
      coordinates: this.coordinates,
      html: this.$el,
    });
  }
}
</script>

<style scoped lang="css">

.content {
  transform: rotate(45deg);
}

.icon {
  bottom: -32px; right: -18px;
}

.img {
  width: 26px; height: 26px;
  top: -2px; left: 13px;
}

.pin {
  width: 30px; height: 30px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  margin: -20px 0 0 -20px;
}
.pin:after {
  content: "";
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  position: absolute;
  border-radius: 50%;
}

.bounce {
  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;
}

.pulse {
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -12px;
  transform: rotateX(55deg);
  z-index: -2;
}
.pulse:after {
  content: "";
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  margin: -13px 0 0 -13px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
  box-shadow: 0 0 1px 2px var(--color-gray);
  animation-delay: 1.1s;
}

@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(-2000px) rotate(-45deg);
  }

  60% {
    opacity: 1;
    transform: translateY(30px) rotate(-45deg);
  }

  80% {
    transform: translateY(-10px) rotate(-45deg);
  }

  100% {
    transform: translateY(0) rotate(-45deg);
  }
}

</style>
