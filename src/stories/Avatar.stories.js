import Avatar, {sizes} from '../components/Avatar/Avatar';

export default {
  title: 'Компоненты/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: sizes,
    },
    to: {
      control: { type: 'text' }
    },
    img: {
      control: { type: 'object' }
    }
  },
};

export const Default = (args) => ({
  components: { Avatar },
  setup: () => ({ ...args }),
  template: `
      <Avatar :to="to" :size="size" :img="img" />
    `,
});
Default.args = {
  img: {
    src: 'https://www.photogorky.ru/photos/f1ac8ec12016c5a9777f8c8f77aec48b.jpg',
    alt: 'Пример'
  },
  size: 'sm',
  to: '/'
};
