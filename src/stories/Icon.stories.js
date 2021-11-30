import Icon from '../components/Icon/Icon';

export default {
  title: 'Компоненты/Icon',
  component: Icon,
};

export const Default = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon :name="name"/>
    `,
});
Default.args = {
  name: 'at',
};

export const Color = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon class="text-info text-5xl" :name="name"/>
    `,
});
Color.args = {
  name: 'at',
};

export const Number = (args) => ({
  components: { Icon },
  setup: () => ({ ...args }),
  template: `
      <Icon :name="name"/>
    `,
});
Number.args = {
  name: 23,
};
