import { ReactElement } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';

export interface AlertDeleteProps {
  open?: boolean,
  close?: () => void,
  agreeDelete?: () => void,
  icon?: ReactElement,
  titleModal?: string,
  bodyText?: string,
  btnCancel?: string,
  btnSucces?: string,
}
export const AlertDelete = ({ open = false, close, agreeDelete, icon,
  titleModal = "title modal",
  bodyText = "",
  btnCancel = "cancelar", btnSucces = "Aceptar" }: AlertDeleteProps) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <Stack
          direction="row"
          justifyContent="center"
          paddingTop={2}
        >
          {icon}
        </Stack>
        <DialogTitle id="alert-dialog-title">
          {titleModal}
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign='center' id="alert-dialog-description">b
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
    </div>
  )
}


