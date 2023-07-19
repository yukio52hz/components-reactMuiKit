import {
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    SvgIconTypeMap,
    SxProps,
    Theme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MouseEvent, ReactElement, useState } from "react";

export interface MenuOptionsProps {
    obj?: any;
    styleMenu?: SxProps<Theme>;
    disabled?: boolean;
    options?: MenuItems[];
    menuIcon?: ReactElement;
}

interface MenuItems {
    name: string;
    event: any;
    icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
    active: boolean;
    colorIcon: string;
    colorText: string;
}
const MenuOptions = ({
    obj,
    styleMenu,
    disabled = true,
    options = [],
    menuIcon
}: MenuOptionsProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    /*   const { t } = useTranslationContext() as translationType; */
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                aria-label="more"
                size="small"
                sx={{
                    backgroundColor: "#F3F5F7",
                    "&:hover": {
                        backgroundColor: "#F3F5F7",
                    },
                    color: "#495057",
                    height: "24px",
                    width: "24px",
                    ...styleMenu,
                }}
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                disabled={!disabled}
            >
                {menuIcon}
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: "20ch",
                    },
                }}
            >
                {options.map(
                    (option) =>
                        option.active && (
                            <MenuItem
                                sx={{ color: option.colorText }}
                                selected={option.name === "Pyxis"}
                                key={option.name}
                                onClick={() => option.event(obj)}
                            >
                                <ListItemIcon>
                                    <option.icon
                                        fontSize="small"
                                        sx={{ color: option.colorIcon }}
                                    />
                                </ListItemIcon>
                                {option.name}
                            </MenuItem>
                        )
                )}
            </Menu>
        </>
    );
};

export default MenuOptions;
