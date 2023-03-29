import { ReactElement } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';

export interface AlertDeleteProps {
  open?: boolean,
  close?: () => void,
  agreeDelete?: () => void,
  icon?: ReactElement,
  titleModal?: string | ReactElement,
  bodyText?: string | ReactElement,
  btnCancel?: string,
  btnSucces?: string,
  widthModal?: string,
  alignTitle ?: "start"|"center"|"justify"|"end"|"left"| "right" ,
  alignContent ?: "start"|"center"|"justify"|"end"|"left"| "right" ,
}
export const AlertDelete = ({ open = false, close, agreeDelete, icon,
  titleModal = "title modal",
  bodyText = "",
  btnCancel = "cancelar", btnSucces = "Aceptar",widthModal='400px',alignTitle="center",alignContent="center" }: AlertDeleteProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{'.MuiPaper-elevation':{width: widthModal,p:2}}}
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
        <DialogContentText textAlign={alignContent} id="alert-dialog-description">
          {bodyText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>{btnCancel}</Button>
        <Button onClick={agreeDelete} variant="contained" autoFocus >
          {btnSucces}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


