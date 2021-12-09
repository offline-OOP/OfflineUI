<template>
  <router-link :to="to">
    <img
      :src="img.src"
      :alt="img.alt"
      class="rounded-full"
      :class="sizeClass"
    />
  </router-link>
</template>

<script>
import oneOfArray from '../../utils/validators/oneOfArray';

export const sizes = ['sm', 'md', 'lg']

const img = {
  type: Object,
  required: true
};

const to = {
  type: String,
};

const size = {
  type: String,
  validator: oneOfArray(sizes),
  default: 'sm'
}

export default {
  name: 'Avatar',
  props: {
    img,
    to,
    size
  },
  computed: {
    sizeClass: ({size}) => {
      switch (size) {
        case 'sm':
          return 'avatar-sm'
        case 'md':
          return 'avatar-md'
        case 'lg':
          return 'avatar-lg'
      }
    }
  }
};
</script>
