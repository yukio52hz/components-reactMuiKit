import * as yup from 'yup';
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import { Button, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { Input } from '../components/Input';
import { MultiInput } from '../components';

type ChainsDomain = {
    id?: number;
    title?: string;
    description?: string;
    name?: string;
    inputs?: string[]
    active?: boolean;
};
interface Props {
    action: string,

    closeModal: any,
}
function FormChain({ closeModal, action }: Props) {
    const [chain, setChain] = useState<ChainsDomain>({
        title: '',
        description: '',
        name: '',
        inputs:[],
        active: false
    })


   const [array,setArray]= useState([] as any)
    const validationSchema = yup.object({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        name: yup.string().required('name is required'),
        active: yup.boolean()
    });

    const formik = useFormik({
        initialValues: chain,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (action === 'create') {
                values.inputs = array
                console.log(values)
            } else {
                console.log(values)
            }
            closeModal()
        },
    });
    const handleSubmit = (inputs: any[]) => {
        
        setArray(inputs)
      };
    useEffect(() => {
        if (action === 'update') {

        }
    }, [action])
    return (
        <>
            <DialogTitle>
                {`${action == 'create' ? ("Chains.Create") : ("Chains.Update")} ${("Chains.Chains")}`}
            </DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container rowSpacing={2} sx={{ pt: 1 }}>
                        <Grid item xs={12} >
                            <Input
                                fullWidth
                                id="name"
                                name="name"
                                label={'Nombre input text'}
                                type="text"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                min={3}
                                max={14}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                id="title"
                                name="title"
                                label={("Chains.Title")}
                                type="text"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                label={("Chains.Description")}
                                name='description'
                                multiline
                                fullWidth
                                rows={3}
                                variant="outlined"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch id='active' checked={formik.values.active} value={formik.values.active} onChange={formik.handleChange} />
                                }
                                label={("Chains.Active")}
                                labelPlacement="top"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MultiInput onSubmit={handleSubmit} valuesInputs={['farid', 'lucas', 'Memo', 'Arrianna']} label={"Url"} />
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button onClick={closeModal}>Close</Button>
                        <Button type='submit' autoFocus >
                            accept
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </>
    )
}

export default FormChain
