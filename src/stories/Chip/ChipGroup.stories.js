import ChipGroup from '../../components/Chip/ChipGroup';
import scheme from '../../components/Chip/ChipGroup.color';
import { GRAY, ACCENT } from '../../colors/colors';
import Chip from '../../components/Chip/Chip';

export default {
  title: 'Компоненты/Chip/ChipGroup',
  component: ChipGroup,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Default = (args) => ({
  components: { ChipGroup, Chip },
  setup: () => ({ ...args }),
  template: `
      <ChipGroup :color="color">
        <template #header>
          Interests
        </template>
        <template v-for="(item, index) in items">
          <Chip :color="item.active? active : notActive" :icon="item.icon" :key="'chip-' + index">
            {{item.text}}
          </Chip>
        </template>
      </ChipGroup>
    `,
});
Default.args = {
  color: GRAY,
  items: [
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: true,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: false,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
  ],
  active: ACCENT,
  notActive: GRAY,
};

export const NoHeader = (args) => ({
  components: { ChipGroup, Chip },
  setup: () => ({ ...args }),
  template: `
      <ChipGroup :color="color">
        <template v-for="(item, index) in items">
          <Chip :color="item.active? active : notActive" :icon="item.icon" :key="'chip-' + index">
            {{item.text}}
          </Chip>
        </template>
      </ChipGroup>
    `,
});
NoHeader.args = {
  color: GRAY,
  items: [
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: true,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: false,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
  ],
  active: ACCENT,
  notActive: GRAY,
};

export const Groups = (args) => ({
  components: { ChipGroup, Chip },
  setup: () => ({ ...args }),
  template: `
    <div class="w-full">
      <ChipGroup class="my-2" :color="color">
        <template v-for="(item, index) in items">
          <Chip :color="item.active? active : notActive" :icon="item.icon" :key="'chip-' + index">
            {{item.text}}
          </Chip>
        </template>
      </ChipGroup>
      <ChipGroup class="my-2" :color="color">
        <template #header>
          Interests
        </template>
        <template v-for="(item, index) in items">
          <Chip :color="item.active? active : notActive" :icon="item.icon" :key="'chip-' + index">
            {{item.text}}
          </Chip>
        </template>
      </ChipGroup>
      <ChipGroup class="my-2" :color="color">
        <template v-for="(item, index) in items">
          <Chip :color="item.active? active : notActive" :key="'chip-' + index">
            {{item.text}}
          </Chip>
        </template>
      </ChipGroup>
    </div>
    `,
});
Groups.args = {
  color: GRAY,
  items: [
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: true,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
    {
      icon: 'at',
      text: 'music',
      active: true,
    },
    {
      icon: 'at',
      text: 'code',
      active: false,
    },
    {
      icon: 'at',
      text: 'game',
      active: false,
    },
    {
      icon: 'at',
      text: 'quest',
      active: false,
    },
  ],
  active: ACCENT,
  notActive: GRAY,
};
