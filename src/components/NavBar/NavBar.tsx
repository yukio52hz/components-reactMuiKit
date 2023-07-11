import {
    AppBar, Box, Button, ClickAwayListener, Divider, Grow, IconButton, ListItemIcon,
    ListItemText, MenuItem, MenuList, Paper, Popper, SxProps, Theme, Toolbar, Typography
} from "@mui/material"
import { ReactElement, SyntheticEvent, useRef, useState } from "react"
const icon_properties = {
    width: '30px',
    height: '30px',
    backgroundColor: "#D2E0FA",
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    borderRadius: '4px'
}
export interface IconMapping {
    [key: string]: ReactElement;
};
export interface AppsType {
    name: string
    url: string
    client_id: string
}
export interface TextMapping {
    titleMenu: string;
    generalOption: string;
    nameSystem: string;
    btnLogout: string;
    userName: string;
}

export interface NavbarProps {
    apps?: AppsType[],
    menuNavbarIcons: IconMapping,
    toLogout?: () => void,
    toSettings?: () => void,
    logoutIcon?: ReactElement,
    userIcon?: ReactElement,
    settingsIcon?: ReactElement,
    menuNavbarIcon?: ReactElement,
    avatarIcon?: ReactElement,
    appBarStyle?: SxProps<Theme> | undefined,
    btnLogoutStyle?: SxProps<Theme> | undefined,
    btnsettingStyle?: SxProps<Theme> | undefined,
    btnMenuStyle?: SxProps<Theme> | undefined,
    navBarTexts?: TextMapping,
    translateTextMenu?: (text: string) => string

}

const NavBar = ({ apps = [], menuNavbarIcons, toLogout, toSettings, logoutIcon, settingsIcon,
    menuNavbarIcon, avatarIcon, appBarStyle = {}, btnLogoutStyle = {},
    btnsettingStyle = {}, navBarTexts, btnMenuStyle, translateTextMenu }: NavbarProps) => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null)
    const [texts, setTexts] = useState(navBarTexts)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const getIcon = (iconName: string): ReactElement | null => {
        if (iconName in menuNavbarIcons) {
            return menuNavbarIcons[iconName]
        } else {
            return null;
        }
    }
    const handleClose = (event: Event | SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }
        setOpen(false)
    }

    return (
        <AppBar position="static" sx={{ ...appBarStyle }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ...btnMenuStyle }}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    {menuNavbarIcon}
                </IconButton>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    sx={{ zIndex: '9999999' }}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper sx={{ padding: '12px', zIndex: '9999999', backgroundColor: '#F1F5FC' }}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        <Typography sx={{ paddingLeft: '16px', marginBottom: '18px', textAlign: "initial" }}
                                            fontWeight={"600"}
                                            variant="body1"
                                        >
                                            {texts?.titleMenu}
                                        </Typography>
                                        {apps.map((app: AppsType) => (
                                            <MenuItem key={app.client_id} onClick={() => window.location.href = app.url}>
                                                <ListItemIcon >
                                                    <Box sx={icon_properties}>
                                                        {getIcon(app.client_id)}
                                                    </Box>
                                                </ListItemIcon>

                                                <ListItemText>
                                                    <Typography
                                                        variant="body2"
                                                        component="p"
                                                        fontWeight={"400"}
                                                    >
                                                        {translateTextMenu ? translateTextMenu(app.name) : app.client_id}
                                                    </Typography>
                                                </ListItemText>
                                            </MenuItem>)
                                        )}
                                        <Divider />
                                        <MenuItem onClick={handleClose} sx={{ marginTop: '38px' }}>
                                            <Button sx={{ ...btnsettingStyle }}
                                                variant="contained"
                                                onClick={toSettings}
                                                startIcon={settingsIcon}>
                                                {texts?.generalOption}
                                            </Button>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <Typography fontWeight={"600"} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "initial" }}>
                    {window.location.pathname != '/' ? texts?.generalOption : texts?.nameSystem}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {avatarIcon}
                    </Box>
                    <Typography
                        fontWeight={"600"}
                        sx={{
                            fontSize: "14px",
                            color: "text.title",
                            alignItems: "center",
                            display: "flex",
                            marginRight: "2rem"
                        }}
                    >
                        {texts?.userName}
                    </Typography>

                    <Button sx={{ ...btnLogoutStyle }}
                        variant="contained"
                        onClick={toLogout}
                        startIcon={logoutIcon}>
                        {texts?.btnLogout}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
