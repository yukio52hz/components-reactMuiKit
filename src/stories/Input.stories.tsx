import { Meta, Story } from '@storybook/react';
import {Input, InputProps } from '../components';


export default {
  component: Input,
  title: 'components/Input',
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<InputProps> =(args) => <Input {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Username',
  id: 'username',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  id: 'password',
  type: 'password',
  error: true,
  helperText: 'Invalid password',
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Bio',
  id: 'bio',
  multiline: true,
  rows: 3,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: 'Email',
  id: 'email',
  color: 'info',
};
