<template>
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

  <div class="width-full flex justify-end font-open-sans font-bold text-sm text-gray">
    <slot name="time">
      <Skeletor
          width="30"
          height="12"
          class="rounded-md"
      />
    </slot>
  </div>
</template>

<script>
import {Skeletor} from 'vue-skeletor';

export default {
  name: "EventActivityTemplate",
  components: {Skeletor}
}
</script>
