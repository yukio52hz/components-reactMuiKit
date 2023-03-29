import  {  ReactElement, useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";


export interface Item {
    valueText: string,
    disabled: boolean
}

export interface MultiInputProps {
    onSubmit: (inputs: string[]) => void;
    textRequired?: string,
    textMaxInput ?: string,
    fullWidth?: boolean | undefined,
    variant?: "standard" | "filled" | "outlined" | undefined,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined,
    direction?: "column" | "column-reverse",
    maxInputs?: number | undefined,
    valuesInputs?: string[],
    iconMore?: ReactElement | string,
    iconLess?: ReactElement | string,
    label?:string
}

export const MultiInput = ({ onSubmit, fullWidth = true, variant = undefined, textRequired = 'Input is required',
textMaxInput='Max number inputs', valuesInputs = [], color = undefined, direction = "column", maxInputs = Infinity,
iconMore="+",iconLess="-",label="Input"}: MultiInputProps) => {

    const [inputs, setInputs] = useState<Item[]>([{ valueText: '', disabled: false }]);
    const [inputValue, setInput] = useState('');
    const [helpMessage, setHelpMessage] = useState('');
    const [err, setErr] = useState(false);
    const [action, setAction] = useState('');

    const [edit, setedit] = useState(true)

    const handleInputChange = (index: number, value: string) => {
        setInput(value);
    };

    const handleAddInput = () => {
        if (inputValue.length == 0) {
            setHelpMessage(textRequired)
            setErr(true)
            return
        } else {
            setHelpMessage('')
            setErr(false)
            const newInputs = [...inputs];
            newInputs.push({ valueText: inputValue, disabled: true })
            setInputs(newInputs);
            setAction('create')
        }
        setInput('')
    };
    const handleRemoveInput = (index: any, event: any) => {
        const list = [...inputs]
        list.splice(index, 1)
        setInputs(list)
        setAction("create")
    }
    const addData = () => {
        if (action == "create") {
            const arrayString = [] as any
            inputs.forEach(element => {
                if (element.valueText.length > 0) {
                    arrayString.push(element.valueText)
                }
            });
            onSubmit(arrayString)
            setAction('')
        }
    }
    const updateData = () => {
        if (valuesInputs.length > 0 && edit) {
            const newInputs = [...inputs];
            valuesInputs.forEach(element => {
                newInputs.push({ valueText: element, disabled: true })
            });
            setInputs(newInputs);
            setedit(false)
        }
    }
    const maxInputsValidation = () => {
        if (inputs.length - 1 == maxInputs) {
            setAction('maxInput'),
            setHelpMessage(textMaxInput)
        } else {
            setAction(''),
            setHelpMessage("")
        }
    }
    useEffect(() => {
        updateData(),
            addData(),
            maxInputsValidation()
    }, [action])



    return (
        <Box sx={{ display: "flex", flexDirection: direction }}>
            {inputs.map((input, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    {
                        input.disabled == false ?
                            <><TextField
                                value={inputValue}
                                onChange={(event) => handleInputChange(index, event.target.value)}
                                label={`${label}`}
                                margin="normal"
                                error={err}
                                helperText={helpMessage}
                                disabled={input.disabled}
                                fullWidth={fullWidth}
                                variant={variant}
                                color={color}
                            /> <Button sx={{ minWidth: "20px", borderRadius: "50%", m: 2 }} variant="contained"
                                color="primary" onClick={handleAddInput} disabled={action == 'maxInput' ? true : false} >
                                   {iconMore}
                                </Button>
                            </> :
                            <>
                                <TextField
                                    value={input.valueText}
                                    onChange={(event) => handleInputChange(index, event.target.value)}
                                    label={`${label} ${index - 1 + 1}`}
                                    margin="normal"
                                    fullWidth={fullWidth}
                                    variant={variant}
                                    disabled={input.disabled}
                                    color={color}
                                />
                                <Button sx={{ minWidth: "20px", borderRadius: "50%", m: 2 }} variant="contained" color="warning" onClick={(event) => handleRemoveInput(index, event)} >
                                   {iconLess}
                                </Button>
                            </>
                    }
                </Box>
            ))}
        </Box>
    );
};
