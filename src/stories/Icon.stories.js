import Icon from '../components/Icon/Icon';

export default {
  title: 'Компоненты/Icon',
  component: Icon,
};

export const Default = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon :value="value"/>
    `,
});
Default.args = {
  value: 'at',
};

export const Color = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon class="text-info text-5xl" :value="value"/>
    `,
});
Color.args = {
  value: 'at',
};

export const Number = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon :value="value"/>
    `,
});
Number.args = {
  value: 23,
};
