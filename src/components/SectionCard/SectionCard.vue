<template>
  <Card :color="color">
    <template #header>
      <div class="mt-2 ml-3 flex items-center">
        <div class="w-14">
          <Skeletor
            size="40"
            class="rounded-md"
          />
        </div>
        <div class="">
          <Skeletor
            width="62"
            height="20"
            class="rounded-md"
          />
        </div>
      </div>
    </template>
    <div class="flex">
      <div class="w-full ml-2 font-montserrat text-black text-xs">
        <slot>

        </slot>
      </div>
    </div>
  </Card>
</template>

<script>
import scheme from "./SectionCard.color";
import ColorScheme from "../../colors/ColorScheme";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import {Skeletor} from 'vue-skeletor';

const name = {
  type: [String, null],
  default: null
}

const icon = {
  type: [String, null],
  default: null
}

export default {
  name: "SectionCard",
  components: {Card, Skeletor, Icon},
  mixins: [ColorScheme],
  data: () => ({
    scheme,
    name,
    icon
  })
}
</script>
