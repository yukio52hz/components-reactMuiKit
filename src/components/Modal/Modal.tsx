import { Theme } from '@emotion/react';
import { Dialog, SxProps } from '@mui/material';
import { ReactNode } from 'react';
export interface ModalProps {
  isOpen?: boolean,
  onClose?: ()=>void,
  children?: ReactNode,
  widthModal?: string,
  modalStyle?:SxProps<Theme> | undefined
  
}
export const Modal = ({ isOpen=false, onClose, 
  children="" ,widthModal='auto',modalStyle={}}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{'.MuiPaper-elevation':{width: widthModal},...modalStyle}}
    >
      {children}
      
    </Dialog>
  )
}

