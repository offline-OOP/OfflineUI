<template>
  <Card :color="color">
    <div class="flex">
      <div class="w-16">
        <slot name="avatar">
          <Skeletor
            size="50"
            circle
          />
        </slot>
      </div>
      <div class="w-full ml-2 font-montserrat text-black text-xs">
        <slot>
          <Skeletor
            v-for="i in 5"
            :key="i"
            height="12"
            :width="i < 5? '100%': '25%'"
            class="mb-1 rounded-md"
          />
        </slot>
      </div>
    </div>
    <slot name="controller"/>
    <template #footer>
      <div class="p-2 ml-auto font-open-sans font-bold text-sm text-gray">
        <slot name="time">
          <Skeletor
            width="30"
            height="12"
            class="rounded-md"
          />
        </slot>
      </div>
    </template>
  </Card>
</template>

<script>
import scheme from "./NotifyCard.color";
import ColorScheme from "../../colors/ColorScheme";
import Card from "../Card/Card";
import { Skeletor } from 'vue-skeletor';

export default {
  name: "NotifyCard",
  components: {Card, Skeletor},
  mixins: [ColorScheme],
  data: () => ({
    scheme
  })
}
</script>
