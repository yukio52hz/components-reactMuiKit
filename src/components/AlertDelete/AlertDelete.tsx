import { ReactElement } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, SxProps, Theme } from '@mui/material';

export interface AlertDeleteProps {
  open?: boolean,
  close?: () => void,
  agreeDelete?: () => void,
  icon?: ReactElement,
  titleModal?: string | ReactElement,
  bodyContent?: string | ReactElement,
  btnClose?: string,
  btnAccept?: string,
  btnStylesAccept?: SxProps<Theme> | undefined
  btnStylesClose?: SxProps<Theme> | undefined
  widthModal?: string,
  alignTitle?: "start" | "center" | "justify" | "end" | "left" | "right",
  alignContent?: "start" | "center" | "justify" | "end" | "left" | "right",

}
export const AlertDelete = ({ open = false, close, agreeDelete, icon,
  titleModal = "title modal",
  bodyContent = "",
  btnClose = "cancelar", btnAccept = "Aceptar", widthModal = '400px', alignTitle = "center",
  alignContent = "center", btnStylesClose = {}, btnStylesAccept = {} }: AlertDeleteProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ '.MuiPaper-elevation': { width: widthModal, p: 2 } }}
    >

      <Stack
        direction="row"
        justifyContent="center"
        paddingTop={2}
      >
        {icon}
      </Stack>
      <DialogTitle textAlign={alignTitle} id="alert-dialog-title">
        {titleModal}
      </DialogTitle>
      <DialogContent>
        {bodyContent}
      </DialogContent>
      <DialogActions>
        <Button onClick={close} sx={btnStylesClose} >{btnClose}</Button>
        <Button onClick={agreeDelete} variant="contained" sx={btnStylesAccept} autoFocus >
          {btnAccept}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


