import { ReactElement, ReactNode, useEffect, useState } from "react";
import { TextField, Button, Box, SxProps, Theme } from "@mui/material";


export interface Item {
    valueText: string,
    disabled: boolean
}

export interface MultiInputProps {
    onSubmit: (inputs: string[]) => void;
    textMaxInput?: string,
    fullWidth?: boolean | undefined,
    variant?: "standard" | "filled" | "outlined" | undefined,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined,
    direction?: "column" | "column-reverse",
    maxInputs?: number | undefined,
    valuesInputs?: string[],
    iconMore?: ReactElement | string,
    iconLess?: ReactElement | string,
    label?: string,
    btnAddStyle?: SxProps<Theme> | undefined,
    btnRemoveStyle?: SxProps<Theme> | undefined,
    helperText?: ReactNode,
    error?: boolean | undefined,
    isRequired?: boolean,
    id?: string | undefined,
    name?: string | undefined,
    textInputRequired?:  ReactNode,
    inputStyle?:SxProps<Theme> | undefined,
}

export const MultiInput = ({ onSubmit, fullWidth = true, variant = undefined,
    textMaxInput = 'Max number inputs', valuesInputs = [], color = undefined, direction = "column", maxInputs = Infinity,
    iconMore = "+", iconLess = "-", label = "Input", btnAddStyle = {}, btnRemoveStyle = {}, helperText = '', isRequired = false, id = "", name = "", error = false ,textInputRequired="This input is required",inputStyle={} }: MultiInputProps) => {

    const [inputs, setInputs] = useState<Item[]>([{ valueText: '', disabled: false }]);
    const [inputValue, setInput] = useState('');
    const [helpMessage, setHelpMessage] = useState(helperText);
    const [err, setErr] = useState(error);
    const [action, setAction] = useState('');
    const handleInputChange = (value: string) => {
        setInput(value);
    };

    const handleAddInput = () => {
        if (inputValue.length === 0 && isRequired === true) {
            setHelpMessage(textInputRequired)
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
    const handleRemoveInput = (index: any) => {
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
        //console.log(valuesInputs,'valuesInputs')
        let isEdit;
        if (valuesInputs.length > 0) {
            //console.log('step1')
            if (inputs.length == 1) {
                isEdit = true
                //console.log(isEdit,'step2')
                if (isEdit) {
                    //console.log('step3')
                    const newInputs = [...inputs];
                    valuesInputs.forEach(element => {
                        newInputs.push({ valueText: element, disabled: true })
                    });
                    setInputs(newInputs);
                    //setedit(false)
                    isEdit = false
                }
            }
            //console.log('fuera')
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
        updateData()
        addData(),
            maxInputsValidation(),
            setHelpMessage(helperText)
        setErr(error)
    }, [action, helperText, error])

    return (
        <Box sx={{ display: "flex", flexDirection: direction }}>
            {inputs.map((input, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    {
                        input.disabled == false ?
                            <><TextField
                                id={id}
                                name={name}
                                value={inputValue}
                                onChange={(event) => handleInputChange(event.target.value)}
                                label={`${label}`}
                                margin="normal"
                                error={err}
                                helperText={helpMessage}
                                disabled={input.disabled}
                                fullWidth={fullWidth}
                                variant={variant}
                                color={color}
                                sx={inputStyle}
                            /> <Button sx={{ minWidth: "20px", borderRadius: "50%", m: 2, ...btnAddStyle }} variant="contained"
                                color="primary" onClick={handleAddInput} disabled={action == 'maxInput' ? true : false} >
                                    {iconMore}
                                </Button>
                            </> :
                            <>
                                <TextField
                                    value={input.valueText}
                                    onChange={(event) => handleInputChange(event.target.value)}
                                    label={`${label} ${index - 1 + 1}`}
                                    margin="normal"
                                    fullWidth={fullWidth}
                                    variant={variant}
                                    disabled={input.disabled}
                                    color={color}
                                    sx={inputStyle}
                                />
                                <Button sx={{ minWidth: "20px", borderRadius: "50%", m: 2, ...btnRemoveStyle }} variant="contained" color="warning" onClick={() => handleRemoveInput(index)} >
                                    {iconLess}
                                </Button>
                            </>
                    }
                </Box>
            ))}
        </Box>
    );
};
