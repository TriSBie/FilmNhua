import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from "yup"
import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, FormGroup, Paper, Stack, Switch, TextField, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FunctionContext from '../FunctionContext/FunctionContext';


export default function Create() {
    const functionContext = useContext(FunctionContext)
    const addNewFilm = functionContext.value.createNewFilm
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
            "imgVD": "",
            "imgBanner": "",
            "display": false
        },
        onSubmit: (values) => {
            addNewFilm(values, setOpen)
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required("Title film cannot be blank. Don't be lazy").min(5, "Title film must be 5 or characters or more"),
            nation: Yup.string().required("Nation is required too. Please types in").min(2, "Must be 2 characters or more"),
            year: Yup.number().integer().required("Please don't go. Type year before you move next fields").min(4, "Year format must contains at least 4 digits").typeError("Please type a correct"),
            img: Yup.string().required("Image reprensents of film cannot be blank").min(5, "Must be 5 or more characters"),
            director: Yup.string().required("Director of the films is important too.").min(5, "Must be 5 or more characters"),
            writers: Yup.string().required("Writers, cannot be blank").min(5, "Must be 5 or more characters"),
            content: Yup.string().required('Complete this fields! Cannot be blank too').min(10, "Must be 10 or more characters"),
            embeddedURL: Yup.string().required('Embedded video link cannot be blank').min(5, "Must be 5 or more characters"),
            imgVD: Yup.string().required('Image represent the video before click cannot be blank').min(5, "Must be 5 or more characters"),
            imgBanner: Yup.string()
        })
    })
    return (
        <>
            <Stack textAlign={'center'} alignContent={'center'}>
                <Typography
                    variant='h4'
                    fontWeight={700}
                    component={'h4'}
                    gutterBottom
                >
                    Create New Film
                </Typography>
            </Stack>
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
                            <Box sx={{
                                width: '60%'
                            }}>
                                <TextField //INPUT TITLE
                                    autoFocus
                                    label='Title'
                                    fullWidth
                                    name='title'
                                    variant='filled'
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Input new title of film'
                                />
                                {formik.errors.title && formik.touched.title &&
                                    <Typography
                                        variant='subtitle2'
                                        color={'red'}
                                    >
                                        {formik.errors.title}
                                    </Typography>
                                }
                            </Box>
                            <Box sx={{
                                width: '40%'
                            }}>
                                <TextField //INPUT year

                                    label="Year"
                                    fullWidth
                                    name='year'
                                    type='number'
                                    variant='filled'
                                    placeholder='Input year of release'
                                    value={formik.values.year}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.year && formik.touched.year &&
                                    <Typography
                                        variant='subtitle2'
                                        color={'red'}
                                    >
                                        {formik.errors.year}
                                    </Typography>
                                }
                            </Box>
                        </Stack>

                        <Stack direction={'row'} spacing={2}>
                            <Box width="60%">
                                <TextField
                                    label="Image Film"
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
                            </Box>
                            <Box width="40%">
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
                            </Box>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <Box width="50%">
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
                                    placeholder='Input director name / creators of film'
                                />
                                {formik.errors.director && formik.touched.director &&
                                    <Typography
                                        variant='subtitle2'
                                        color={'red'}
                                    >
                                        {formik.errors.director}
                                    </Typography>
                                }
                            </Box>
                            <Box width="50%">
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
                            </Box>
                        </Stack>

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

                        <Stack direction={'row'} spacing={2}>
                            <Box width={'70%'}>
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
                            </Box>
                            <Box width={"30%"}>
                                <Accordion
                                    sx={{
                                        width: '300px',
                                        marginTop: 1.4,
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
                                        >
                                            Feature
                                        </Typography>
                                    </AccordionSummary>
                                    <Divider
                                        variant='fullWidth'
                                    ></Divider>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                label='New Update Film'
                                                control={<Checkbox
                                                    // checked={formik.values.feature.includes('isUpdate')}
                                                    name='feature.isNewUpdate'
                                                    value={formik.values.feature.isNewUpdate}
                                                    onChange={formik.handleChange}

                                                />}
                                            />
                                            <FormControlLabel
                                                label='Hot Film'
                                                control=
                                                {<Checkbox
                                                    // checked={formik.values.feature.includes('isHot')}
                                                    name='feature.isHot'
                                                    value={formik.values.feature.isHot}
                                                    onChange={formik.handleChange}
                                                />}
                                            />
                                            <FormControlLabel
                                                label='SLider Film'
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
                            </Box>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <Box width={'50%'}>
                                <TextField //INPUT Img VIDEO
                                    sx={{ marginBottom: '10px' }}
                                    label="Img video"
                                    margin='dense'
                                    name='imgVD'
                                    type='text'
                                    fullWidth
                                    variant='filled'
                                    value={formik.values.imgVD}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter image represents showing the image video'
                                />
                                {formik.errors.imgVD && formik.touched.imgVD &&
                                    <Typography
                                        variant='subtitle2'
                                        color={'red'}
                                    >
                                        {formik.errors.imgVD}
                                    </Typography>
                                }
                            </Box>
                            <Box width={'50%'}>
                                <TextField //INPUT Img Banner Slider
                                    sx={{ marginBottom: '10px' }}
                                    label="Image Banner"
                                    margin='dense'
                                    name='imgBanner'
                                    type='text'
                                    fullWidth
                                    variant='filled'
                                    value={formik.values.imgBanner}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter image represents showing the image banner (Not requires)'
                                />
                                {formik.errors.imgBanner && formik.touched.imgBanner &&
                                    <Typography
                                        variant='subtitle2'
                                        color={'red'}
                                    >
                                        {formik.errors.imgVD}
                                    </Typography>
                                }
                            </Box>
                        </Stack>
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
                                    sx={{
                                        padding: '10px 0',
                                        fontSize: '20px'
                                    }}
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
