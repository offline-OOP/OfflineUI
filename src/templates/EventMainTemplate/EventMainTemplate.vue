<template>
  <div class="flex">

    <div class="w-12">
      <slot name="avatar">
        <Skeletor
            size="40"
            circle
        />
      </slot>
    </div>

    <div class="flex flex-col w-full ml-2">

      <div class="font-open-sans font-bold -mb-1 text-base text-black">
        <slot name="name">
          <Skeletor
              height="16"
              width="50%"
              class="rounded-md mb-1.5"
          />
        </slot>
      </div>

      <div class="font-open-sans flex font-semibold mb-2 text-sm text-gray">
        <slot name="appName">
          @ <Skeletor
            height="14"
            width="25%"
            class="rounded-md mt-1 ml-0.5 mb-1"
        />
        </slot>
      </div>

      <div class="font-montserrat text-xs text-black">
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
  </div>
</template>

<script>
import {Skeletor} from 'vue-skeletor';

export default {
  name: "EventMainTemplate",
  components: {Skeletor}
}
</script>
