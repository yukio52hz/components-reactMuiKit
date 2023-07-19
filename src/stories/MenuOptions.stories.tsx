import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuOptions, } from '../components';
import { MenuOptionsProps } from '../components/MenuOptions/MenuOptions';
import SettingsIcon from "@mui/icons-material/Settings"

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default {
    title: 'components/MenuOptions',
    component: MenuOptions,
} as Meta;

const Template: Story<MenuOptionsProps> = (args) => <MenuOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
    obj: {},
    styleMenu: {},
    disabled: true,
    options: [
        {
            name: 'Option 1',
            event: () => { },
            icon: SettingsIcon,
            active: true,
            colorIcon: '#000000',
            colorText: '#000000',
        },
        {
            name: 'Option 2',
            event: () => { },
            icon: DeleteIcon,
            active: true,
            colorIcon: '#000000',
            colorText: '#000000',
        },
        {
            name: 'Option 3',
            event: () => { },
            icon: EditIcon,
            active: true,
            colorIcon: '#000000',
            colorText: '#000000',
        },
    ],
    menuIcon: <span>Menu Icon</span>,
};
