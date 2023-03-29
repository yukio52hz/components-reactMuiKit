import {  Stack } from '@mui/material'
import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';

export interface PagerProps {
    count?: number,
    perPage?: number,
    paginationChange:Function,
    variant?: 'outlined'| 'text',
    color?: 'standard'|'primary'|'secondary',
    disabled?:boolean,
  }
export const Pager = ({count=0,perPage=5,paginationChange,variant="outlined",color="secondary",disabled=false}:PagerProps) => {

    const [pageLocal, setLocalPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setLocalPage(value);
      paginationChange([`page=${value}`])
    }; 

    return (
        <Stack spacing={2} sx={{pt:2,pb:2 }}>
           {/*  <Typography>Page: {pageLocal}</Typography>
            <Typography>PerPage: {perPage}</Typography> */}
            <Pagination 
             color={color}
             variant={variant}
             disabled={disabled}
            
             count={Math.ceil(count/perPage)} 
             page={pageLocal} 
             onChange={handleChange} />
        </Stack>
    )
}

