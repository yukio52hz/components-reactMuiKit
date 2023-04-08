import { ReactElement, useState } from 'react';
import { InputAdornment,SxProps,TextField, Theme } from '@mui/material'

export interface SearchFilterProps {
    wordForSearh: Function,
    placeholder?: string,
    iconSearch?: ReactElement,
    iconClear?: ReactElement | string,
    searchStyle?: SxProps<Theme> | undefined,
    size?: "medium" | "small",
    variant?: "standard" | "filled" | "outlined" | undefined,
    fullWidth?: boolean | undefined,

}
export const SearchFilter = ({ wordForSearh, placeholder = 'buscar', iconSearch,fullWidth = true, iconClear = "x", variant = undefined,searchStyle={},size="small" }: SearchFilterProps) => {
    const [showClearIcon, setShowClearIcon] = useState("none");
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>| any) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        const lowerCase = `search=${event.target.value.toLowerCase()}`;
        //return a function with an array,with the word search and page=1 for error at search in other pages
        wordForSearh([lowerCase, 'page=1']);
    };
    const clearInput = ()=> {
        const searchInput = document.getElementById("searchInput")as HTMLInputElement;
        searchInput ? searchInput.value = "": undefined
        setShowClearIcon("none");
        wordForSearh(['search=', 'page=1']);
    };
    return (
        <TextField
            id="searchInput"
            fullWidth={fullWidth}
            size={size}
            variant={variant}
            onChange={inputHandler}
            placeholder={placeholder}
            sx={searchStyle}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {iconSearch}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                        sx={{ cursor: "pointer" }}
                        variant={variant}
                        onClick={clearInput}
                    >
                        {iconClear}
                    </InputAdornment>
                ),
            }}
        />
    )
}


