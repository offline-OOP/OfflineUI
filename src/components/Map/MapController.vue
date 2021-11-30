<template>
  <div class="flex flex-col">
    <FloatBtn
      v-for="action in actions"
      :key="'map-controller-' + action"
      :color="color" class="shadow-md my-3"
      :active="action === activeAction"
      @click="$emit(action)"
    >

      <icon :name="action"/>
    </FloatBtn>
  </div>
</template>

<script>
import scheme from './MapController.color';
import ColorScheme from '../../mixins/ColorScheme';
import FloatBtn from '../FloatBtn/FloatBtn';
import Icon from '../Icon/Icon';

const color = scheme.prop;

const activeAction = {
  type: String,
  default: ''
}

export default {
  name: 'MapController',
  components: { Icon, FloatBtn },
  mixins: [ColorScheme],
  data: () => ({
    actions: ['search', 'location', 'filter'],
  }),
  props: {
    color,
    activeAction
  },
  created() {
    this.initScheme(scheme);
  },
};
</script>
