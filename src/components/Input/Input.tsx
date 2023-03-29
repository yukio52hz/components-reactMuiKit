import { TextField } from '@mui/material'
import React, { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useEffect, useState } from 'react'


export interface InputProps {
  id?: string | undefined,
  name?: string | undefined,
  label?: ReactNode,
  type?: HTMLInputTypeAttribute | undefined,
  value?: any,
  multiline?: boolean | undefined,
  fullWidth?: boolean | undefined,
  variant?: "standard" | "filled" | "outlined" | undefined,
  error?: boolean | undefined,
  helperText?: ReactNode,
  rows?: string | number | undefined,
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined,
  autoFocus?: boolean | undefined,
  autoComplete?: string | undefined,
  min?: number | undefined,
  max?: number | undefined,
  disabled?:boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,

}

export const Input = ({ id = "", name = "", label = "", type = undefined, value = '',
  multiline = undefined, fullWidth = undefined, variant = undefined, error = undefined,
  helperText = '', rows = undefined, color = undefined, autoFocus = undefined, autoComplete = undefined, min = 0, max = undefined,
  disabled=false, onChange
}: InputProps) => {
  const [newValue, setValue] = useState<string>(value || '');
  const [helpMessage, setHelpMessage] = useState(helperText);
  const [err, setErr] = useState(error)

  const inputProps = {
    minLength: min,
    maxLength: max
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
    setValue(value)

    if (min && value.length < min) {
      setErr(true)
      setHelpMessage(`Debe tener entre ${min} y ${max} caracteres`)
    } else {
      setErr(false)
      setHelpMessage(``)
    }

    if (onChange != null) {
      onChange(event);
    }

  };

  useEffect(() => {
    setHelpMessage(helperText)
    setErr(error)

  }, [helperText, error])

  return <TextField id={id} name={name} label={label} type={type} value={newValue} multiline={multiline} fullWidth={fullWidth}
    variant={variant} error={err} helperText={helpMessage} rows={rows} color={color} autoFocus={autoFocus}
    autoComplete={autoComplete} onChange={handleChange} disabled={disabled} InputProps={{ inputProps }} />
}

