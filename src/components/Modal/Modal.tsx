import { Dialog } from '@mui/material';
import { ReactNode } from 'react';
export interface ModalProps {
  isOpen?: boolean,
  onClose?: ()=>void,
  children?: ReactNode,
}
export const Modal = ({ isOpen=false, onClose, 
  children="" }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      {children}
      
    </Dialog>
  )
}

