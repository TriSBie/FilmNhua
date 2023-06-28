import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from "yup"
import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, FormGroup, Paper, Stack, Switch, TextField, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FunctionContext from '../FunctionContext/FunctionContext';


export default function Create() {
    const functionContext = useContext(FunctionContext)
    const addNewFilm = functionContext.createNewFilm
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const formik = useFormik({
        initialValues: {
            "title": "",
            "year": "",
            "img": "",
            "director": "",
            "writers": "",
            "nation": "",
            "content": "",
            "feature": {
                "isNewUpdate": false,
                "isHot": false,
                "isSlider": false
            },
            "embeddedURL": "",
            "imgVd": "",
            "display": false
        },
        onSubmit: (values) => {
            addNewFilm(values, setOpen)
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required("This field is required").min(5, "Must be 5 or characters or more"),
            nation: Yup.string().required("This field is required").min(2, "Must be 2 characters or more"),
            year: Yup.number().integer().typeError("Please type a number"),
            img: Yup.string().required("This field is required").min(2, "Must be 2 or more characters"),
            director: Yup.string().required("This field is required").min(2, "Must be 2 or more characters"),
            writers: Yup.string().required("This field is required").min(2, "Must be 2 or more characters"),
            content: Yup.string().required('This field is required').min(2, "Must be 2 or more characters"),
            embeddedURL: Yup.string().required('This field is required').min(2, "Must be 2 or more characters"),
            imgVd: Yup.string().required('This field is required').min(2, "Must be 2 or more characters")
        })
    })
    return (
        <>
            <Typography
                variant='h4'
                gutterBottom
                align='center'
            >
                Create New Film
            </Typography>
            <Stack>
                <Paper
                    sx={{
                        padding: '15px'
                    }}
                    variant='elevation'
                    component={'div'}
                    elevation={2}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <Stack direction={'row'} spacing={2}>
                            <TextField //INPUT TITLE
                                label='Title'
                                fullWidth
                                name='title'
                                variant='filled'
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Input new title of film'
                            />
                            <TextField //INPUT year
                                sx={{
                                    width: '40%'
                                }}
                                label="Year"
                                margin='dense'
                                name='year'
                                type='number'
                                variant='filled'
                                placeholder='Input year of release'
                                value={formik.values.year}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </Stack>
                        {formik.errors.title && formik.touched.title &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.title}
                            </Typography>
                        }
                        {formik.errors.year && formik.touched.year &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.year}
                            </Typography>
                        }
                        <TextField
                            label="Image"
                            margin='dense'
                            name='img'
                            type='text'
                            fullWidth
                            variant='filled'
                            value={formik.values.img}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Input image link represents for film'
                        />
                        {formik.errors.img && formik.touched.img &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.img}
                            </Typography>
                        }
                        <TextField // INPUT DIRECTOR
                            label="Director"
                            name='director'
                            fullWidth
                            margin='dense'
                            type='text'
                            variant='filled'
                            value={formik.values.director}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Input directions name / creators of film'
                        />
                        {formik.errors.director && formik.touched.director &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.direction}
                            </Typography>
                        }
                        <TextField //INPUT WRITERS
                            label="Writers"
                            name='writers'
                            type='text'
                            fullWidth
                            margin='dense'
                            variant='filled'
                            value={formik.values.writers}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Input the writer makes the film'
                        />
                        {formik.errors.writers && formik.touched.writers &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.writers}
                            </Typography>
                        }
                        <TextField //INPUT NATION
                            label="Nation"
                            margin='dense'
                            name='nation'
                            type='text'
                            fullWidth
                            variant='filled'
                            value={formik.values.nation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Input film's nation"
                        />
                        {formik.errors.nation && formik.touched.nation &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.nation}
                            </Typography>
                        }
                        <TextField //INPUT CONTENT
                            label="Content"
                            margin='dense'
                            name='content'
                            multiline
                            type='text'
                            fullWidth
                            rows={4}
                            variant='filled'
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Write the summary of the film'

                        />
                        {formik.errors.content && formik.touched.content &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.content}
                            </Typography>
                        }

                        <Accordion
                            sx={{
                                width: '300px',
                                marginTop: '20px'
                                , marginBottom: '10px',
                                '&:focus': {
                                    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
                                }
                            }}

                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{
                                    '&:focus': {
                                        borderBottom: '1px solid #ecececec',
                                    }
                                }}
                            >
                                <Typography
                                    variant='subtitle1'
                                >Feature</Typography>
                            </AccordionSummary>
                            <Divider
                                variant='fullWidth'
                            ></Divider>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel
                                        label='Is new update Film'
                                        control={<Checkbox
                                            // checked={formik.values.feature.includes('isUpdate')}
                                            name='feature.isUpdate'
                                            value={formik.values.feature.isNewUpdate}
                                            onChange={formik.handleChange}

                                        />}
                                    />
                                    <FormControlLabel
                                        label='Is Hot Film'
                                        control=
                                        {<Checkbox
                                            // checked={formik.values.feature.includes('isHot')}
                                            name='feature.isHot'
                                            value={formik.values.feature.isHot}
                                            onChange={formik.handleChange}
                                        />}
                                    />
                                    <FormControlLabel
                                        label='Is Slider Show'
                                        che
                                        control=
                                        {
                                            <Checkbox
                                                // checked={formik.values.feature.includes('isSlider')}
                                                name='feature.isSlider'
                                                value={formik.values.feature.isSlider}
                                                onChange={formik.handleChange}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>


                        <TextField //INPUT EMBEDDED URL VIDEO
                            label="Embedded link"
                            margin='dense'
                            name='embeddedURL'
                            type='text'
                            fullWidth
                            variant='filled'
                            value={formik.values.embeddedURL}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter embeddedURL youtube code'
                        />
                        {formik.errors.embeddedURL && formik.touched.embeddedURL &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.embeddedURL}
                            </Typography>
                        }
                        <TextField //INPUT Img VIDEO
                            sx={{ marginBottom: '10px' }}
                            label="Img video"
                            margin='dense'
                            name='imgVd'
                            type='text'
                            fullWidth
                            variant='filled'
                            value={formik.values.imgVd}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter image represents showing the image video'
                        />
                        {formik.errors.imgVd && formik.touched.imgVd &&
                            <Typography
                                variant='subtitle2'
                                color={'red'}
                            >
                                {formik.errors.imgVd}
                            </Typography>
                        }


                        <Stack
                            direction={'column'}
                            spacing={2}
                        >
                            <FormControlLabel
                                label='Active film'
                                name='display'
                                control={<Switch value={formik.values.display} name='display' onChange={formik.handleChange} />}
                            />
                            <Box>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    size='large'
                                    type='submit'
                                >
                                    Add
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </Paper>
            </Stack >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            // TransitionComponent={Transition}
            >
                <DialogTitle
                    id="alert-dialog-title">
                    Notification
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Alert severity='success'>
                            <AlertTitle>Success</AlertTitle>
                            New Films has been added successfully!
                        </Alert>
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Link to={'/admin'}>
                            <Button onClick={handleClose} autoFocus>
                                Dashboard
                            </Button>
                        </Link>
                    </DialogActions>
                </DialogContent>

            </Dialog>
        </>
    )
}
