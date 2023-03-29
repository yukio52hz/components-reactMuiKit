import { Meta, Story } from '@storybook/react';
import { SearchFilter, SearchFilterProps } from '../components';

export default {
    title: 'components/SearchFilter',
    component: SearchFilter,
    wordForSearh: { action: 'search' },
    placeholder: { control: 'text' },
    iconSearch: { control: 'element' },
    iconClear: { control: 'element' },
    variant: { options: ['standard', 'filled', 'outlined'], control: { type: 'radio' } },
} as Meta;

const Template: Story<SearchFilterProps> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Buscar...',
  iconClear: 'x',
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  placeholder: 'Buscar...',
  
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  placeholder: 'Buscar...',
  variant: 'filled',
};