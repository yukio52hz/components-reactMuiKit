import { Story, Meta } from '@storybook/react';
import { Pager, PagerProps } from '../components/Pager';


export default {
  title: 'components/Pager',
  component: Pager,
 
} as Meta;

const Template: Story<PagerProps> = (args) => <Pager {...args}/>;

export const Default = Template.bind({});
Default.args = {
  count: 20,
  perPage: 5,
  paginationChange: (pages:any) => console.log(pages),
  variant: 'outlined',
  color: 'secondary',
  disabled: false,
};
