import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import FunctionContext from '../FunctionContext/FunctionContext';

export default function DialogDel({ dataFilm, open, setOpen }) {
    const functionContext = React.useContext(FunctionContext);

    const handleClose = () => {
        setOpen(false)
    }

    return (

        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure to disable display of this film"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <Card
                    >
                        <Stack direction={'row'} alignContent={'normal'}>
                            <CardMedia
                                component={"img"}
                                alt=''
                                height='100%'
                                image={dataFilm.img}
                                sx={{
                                    width: '500px',
                                    height: '350px',
                                    objectFit: 'contain'
                                }}
                            />
                            <CardContent>
                                <Typography
                                    component={'h5'}
                                    variant='h6'
                                    color={'Highlight'}
                                    padding={0}
                                >
                                    Title : {dataFilm.title} ({dataFilm.year})
                                </Typography>
                                <Typography
                                    component={'h5'}
                                    variant='subtitle1'
                                >
                                    - ID : {dataFilm.id} <br />
                                    - Director: {dataFilm.director} <br />
                                    - Writers: {dataFilm.writers} <br />
                                    - Content: {dataFilm.content}
                                </Typography>
                            </CardContent>
                        </Stack>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => functionContext.value.handleDisableDisplay(dataFilm.id, setOpen)}
                        autoFocus
                    >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <Dialog
                open={openMsg}
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
                            Films with id {dataFilm.id} has been updated successfully!
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
            </Dialog> */}
        </div >
    )
}
