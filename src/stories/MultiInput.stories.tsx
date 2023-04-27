import { Meta, Story } from '@storybook/react';
import { MultiInput, MultiInputProps } from "../components";


export default {
  title: 'components/MultiInput',
  component: MultiInput,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
    fullWidth: { control: 'boolean' },
    variant: { control: 'select', options: ['standard', 'filled', 'outlined'] },
    textInputRequired: { control: 'text' },
    textMaxInput: { control: 'text' },
    color: { control: 'select', options: ['error', 'primary', 'secondary', 'info', 'success', 'warning'] },
    direction: { control: 'select', options: ['column', 'column-reverse'] },
    maxInputs: { control: 'number' },
    valuesInputs: { control: 'array' },
    iconMore: { control: 'text' },
    iconLess: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template:Story<MultiInputProps> = (args) => <MultiInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: () => {},
  fullWidth: true,
  variant: 'outlined',
  textInputRequired: 'Input is required',
  textMaxInput: 'Max number inputs',
  color: 'primary',
  direction: 'column',
  maxInputs: Infinity,
  valuesInputs: [],
  iconMore: '+',
  iconLess: '-',
  label: 'Input',
};
