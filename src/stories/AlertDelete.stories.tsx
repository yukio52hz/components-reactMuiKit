import { Meta, Story } from '@storybook/react';
import { AlertDelete, AlertDeleteProps } from '../components';


export default {
  component: AlertDelete,
  title: 'components/AlertDelete',

} as Meta;

const Template: Story<AlertDeleteProps> = (args) => <AlertDelete {...args} />;


export const Default = Template.bind({});
Default.args = {};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  open: true,
  titleModal: 'Are you sure you want to delete this item?',
  bodyContent:
    'Deleting this item will permanently remove it from your account. This action cannot be undone.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  open: true,
  icon: <i className="material-icons">warning</i>,
  titleModal: 'Are you sure you want to delete this item?',
  bodyContent:
    'Deleting this item will permanently remove it from your account. This action cannot be undone.',
  btnClose: 'Cancel',
  btnAccept: 'Delete',
};
