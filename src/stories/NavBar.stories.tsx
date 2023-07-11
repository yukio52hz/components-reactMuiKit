import { Story, Meta } from '@storybook/react';
import { NavBar } from '../components';
import { NavbarProps } from '../components/NavBar/NavBar';

import LogoutIcon from "@mui/icons-material/Logout"
import SettingsIcon from "@mui/icons-material/Settings"
import AppsIcon from '@mui/icons-material/Apps'
import HomeIcon from "@mui/icons-material/Home"
export default {
    title: 'components/Navbar',
    component: NavBar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    apps: [
        {
            name: 'App 1',
            url: 'https://www.example.com/app1',
            client_id: 'app1',
        },
        {
            name: 'App 2',
            url: 'https://www.example.com/app2',
            client_id: 'app2',
        },
    ],
    menuNavbarIcons: {
        app1: <HomeIcon />,
        app2: <HomeIcon />,
    },
    toLogout: () => {
        // Lógica para realizar la acción de logout
    },
    toSettings: () => {
        // Lógica para navegar a la configuración
    },
    logoutIcon: <LogoutIcon />,
    settingsIcon: <SettingsIcon />,
    menuNavbarIcon: <AppsIcon />,
    // avatarIcon: <YourAvatarIcon />,
    appBarStyle: {
        // Estilos para AppBar
    },
    btnLogoutStyle: {
        // Estilos para el botón de logout
    },
    btnsettingStyle: {
        // Estilos para el botón de configuración
    },
    btnMenuStyle: {
        // Estilos para el botón de menú
    },
    navBarTexts: {
        titleMenu: 'Menu',
        generalOption: 'Option',
        nameSystem: 'System Name',
        btnLogout: 'Logout',
        userName: 'User Name',
    },
    translateTextMenu: (text) => {
        // Lógica para traducir el texto del menú
        return text;
    },
};

