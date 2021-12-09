import Step from '../../components/Stepper/Step';
import scheme from '../../components/Stepper/Step.color';
import { INFO } from '../../colors/colors';

export default {
  title: 'Компоненты/Stepper/Step',
  component: Step,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: scheme.colors,
    },
  },
};

export const Checked = (args) => ({
  components: { Step },
  setup: () => ({ ...args }),
  template: `
      <div>
          <Step :checked="checked" :color="color"/>
          <br><br>
          <Step :checked="checked" :color="color"/>
          <br><br>
          <Step :checked="false" :color="color"/>
          <br><br>
          <Step :checked="false" :color="color"/>
      </div>
    `,
});
Checked.args = {
  checked: true,
  color: INFO,
};

export const NoChecked = (args) => ({
  components: { Step },
  setup: () => ({ ...args }),
  template: '<Step :checked="checked" :color="color"/>',
});
NoChecked.args = {
  checked: false,
  color: INFO,
};
