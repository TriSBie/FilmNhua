import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, FormGroup, IconButton, Snackbar, Stack, TextField } from '@mui/material';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { ExpandMore } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import FunctionContext from '../FunctionContext/FunctionContext';
import { Link } from 'react-router-dom';


function SubModal({ open, handleCloseChildModal, handleDelete, id, handleClose }) {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleCloseChildModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 500, height: 120 }} >
                    <h4 id="child-modal-title"> Are you sure to delete this film ?</h4>
                    <Box textAlign={'right'} display={'flex'} justifyContent={'center'} marginTop={2}>
                        <Button size='large'
                            sx={{ '&:hover': { backgroundColor: 'primary.main', color: '#fff' }, marginRight: '10px' }}
                            onClick={() => {
                                handleDelete(id)
                                handleCloseChildModal();
                                handleClose();
                            }}>Confirm
                        </Button>
                        <Button size='large'
                            sx={{ '&:hover': { backgroundColor: 'primary.main', color: '#fff' } }}
                            onClick={handleCloseChildModal}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment >
    );
}



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
    , borderRadius: '15px',
    p: 2,
    border: 'none',
    overflow: 'hidden'
};

const changeImmediatelyImage = (data1, data2) => {
    return data1 === data2 ? data1 : data2
}

export default function Edit({ dataFilm, open, setOpen }) {
    const functionContext = React.useContext(FunctionContext)

    const handleClose = () => setOpen(false);
    const [openChildModal, setChildModal] = React.useState(false)


    const handleOpenChildModal = () => {
        setChildModal(true)
    }
    const handleCloseChildModal = () => {
        setChildModal(false)
    }


    const handleSubmit = (values) => {
        functionContext.value.handleEdit(values);

    }

    console.log(dataFilm)
    const formik = useFormik({
        initialValues: {
            "id": dataFilm.id,
            "title": dataFilm.title,
            "year": dataFilm.year,
            "img": dataFilm.img,
            "director": dataFilm.director,
            "writers": dataFilm.writers,
            "nation": dataFilm.nation,
            "content": dataFilm.content,
            "feature": {
                "isNewUpdate": dataFilm.feature.isNewUpdate === null ? false : dataFilm.feature.isNewUpdate,
                "isHot": dataFilm.feature.isHot === null ? false : dataFilm.feature.isHot,
                "isSlider": dataFilm.feature.isSlider === null ? false : dataFilm.feature.isSlider
            },
            "embeddedURL": dataFilm.embeddedURL,
            "imgBanner": dataFilm.imgBanner === null ? "" : dataFilm.imgBanner,
            "imgVD": dataFilm.imgVD
        },
        onSubmit: (values) => {
            //NOT WORKING
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
            imgVD: Yup.string().required('Image represent the video before click cannot be blank').min(5, "Must be 5 or more characters")
        }),
        enableReinitialize: true
    })
    console.log(formik.values)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                >
                    <Stack direction={'row'} spacing={2} justifyContent={'center'}>
                        <Typography variant='h4' component={'h5'}>Edit Film</Typography>
                        <IconButton color='error'
                            aria-label='delete'
                            onClick={handleOpenChildModal}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'tomato',
                                    opacity: '0.8'
                                }
                            }}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <Box
                            //LEFT SIDE
                            width={'30%'}
                            height={'100%'}
                        >
                            <CardMedia
                                component={"img"}
                                alt=''
                                src={
                                    changeImmediatelyImage(dataFilm.img, formik.values.img)
                                }
                                sx={{
                                    width: '100%',
                                    height: '450px',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                        <Box //RIGHT SIDE
                            width={"80%"}
                            height={'100%'}
                        >
                            <Stack
                                height={500}
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
                                            size='small'
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
                                            size='small'
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
                                        size='small'
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
                                    <Stack direction={'row'}>
                                        <Box width={'50%'} marginRight={
                                            3
                                        }>
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
                                                size='small'
                                                placeholder='Input directions name / creators of film'
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
                                        <Box width={'50%'}>
                                            <TextField //INPUT WRITERS
                                                label="Writers"
                                                name='writers'
                                                type='text'
                                                fullWidth
                                                margin='dense'
                                                size='small'
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


                                    <TextField //INPUT NATION
                                        label="Nation"
                                        margin='dense'
                                        name='nation'
                                        type='text'
                                        size='small'
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
                                    <Stack direction={'row'} textAlign={'center'} alignContent={'center'}>
                                        <Box width={'60%'} marginRight={2}>
                                            <TextField //INPUT CONTENT
                                                label="Content"
                                                margin='dense'
                                                name='content'
                                                size='small'
                                                multiline
                                                type='text'
                                                fullWidth
                                                rows={3}
                                                variant='filled'
                                                value={formik.values.content}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder='Write the summary of the film'
                                            />
                                            {formik.errors.content && formik.touched.content &&
                                                <Typography
                                                    variant='caption'
                                                    color={'red'}
                                                >
                                                    {formik.errors.content}
                                                </Typography>
                                            }
                                        </Box>
                                        <Box width={'40%'}>
                                            <Accordion
                                                sx={{
                                                    marginTop: '10px',
                                                    width: '80%',
                                                    overflow: "hidden",
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
                                                <AccordionDetails
                                                    sx={{ height: '150px' }}
                                                >
                                                    <FormGroup
                                                        sx={{
                                                            display: 'flex',
                                                            width: "100%",
                                                            flexDirection: 'column',
                                                            overflowX: "hidden",
                                                            height: '100%',

                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            sx={{
                                                                fontSize: "18px"
                                                            }}
                                                            label='New Update Film'
                                                            control={<Checkbox
                                                                // checked={formik.values.feature.includes('isUpdate')}
                                                                name='feature.isNewUpdate'
                                                                value={formik.values.feature.isNewUpdate}
                                                                checked={
                                                                    formik.values.feature.isNewUpdate
                                                                }
                                                                onChange={formik.handleChange}

                                                            />}
                                                        />
                                                        <FormControlLabel
                                                            label='Hot Film'
                                                            sx={{
                                                                fontSize: "18px"
                                                            }}
                                                            control=
                                                            {<Checkbox
                                                                // checked={formik.values.feature.includes('isHot')}
                                                                name='feature.isHot'
                                                                checked={
                                                                    formik.values.feature.isHot}
                                                                value={formik.values.feature.isHot}
                                                                onChange={formik.handleChange}
                                                            />}
                                                        />
                                                        <FormControlLabel
                                                            label='Slider Show'
                                                            sx={{
                                                                fontSize: "18px"
                                                            }}
                                                            control=
                                                            {
                                                                <Checkbox
                                                                    // checked={formik.values.feature.includes('isSlider')}
                                                                    name='feature.isSlider'
                                                                    checked={
                                                                        formik.values.feature.isSlider}
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
                                            <TextField //INPUT EMBEDDED URL VIDEO
                                                label="Embedded link"
                                                margin='dense'
                                                name='embeddedURL'
                                                type='text'
                                                size='small'
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

                                        <Box width={'50%'}>
                                            <TextField //INPUT Img VIDEO
                                                sx={{ marginBottom: '10px' }}
                                                label="Img video"
                                                margin='dense'
                                                size='small'
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
                                    </Stack>
                                    <Box>
                                        <TextField //INPUT Img Banner Slider
                                            sx={{ marginBottom: '10px' }}
                                            label="Image Banner Video"
                                            margin='dense'
                                            name='imgBanner'
                                            type='text'
                                            fullWidth
                                            variant='filled'
                                            value={formik.values.imgBanner}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder='Enter image represents showing the image video'
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

                                    <Stack direction={'row'} spacing={2} >
                                        <Button
                                            type='button'
                                            fullWidth
                                            variant='contained'
                                            size='large'
                                            onClick={() => {
                                                handleSubmit(formik.values) //submit form
                                                handleClose();
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            size='large'
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Modal>
            <SubModal
                open={openChildModal}
                handleCloseChildModal={handleCloseChildModal}
                handleDelete={functionContext.value.handleDelete}
                id={dataFilm.id}
                handleClose={handleClose}
            />
        </div>
    );
}