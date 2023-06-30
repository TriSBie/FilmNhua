import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button, Stack, FormControlLabel, Switch, FormControl, InputLabel, Select, MenuItem, IconButton, Backdrop, CircularProgress, } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DialogDel from './DialogDel';
import DialogReOpen from "./DialogReOpen"
import Edit from './Edit';
import FunctionContext from '../FunctionContext/FunctionContext';



export default function Admin() {
    const functionContext = React.useContext(FunctionContext)
    //get all film from storage
    const baseURL = 'https://6493c0730da866a95366a9e5.mockapi.io/Films/film_storage';
    const [films, setFilm] = useState([]);
    const pageSize = 10;
    const [openDialogDel, setOpenDialogDel] = useState(false);
    const [openDialogReOpen, setOpenDialogReOpen] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [dataFilm, setDataFilms] = useState(null);
    const [isLoading, setLoading] = useState(true);


    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'img', headerName: 'Image', width: 60, renderCell: (params) => <Avatar src={params.row.img}></Avatar> },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'director', headerName: 'Directors', width: 100 },
        { field: 'writers', headerName: 'Writers', width: 70 },
        { field: 'nation', headerName: 'Nation', width: 70 },
        { field: 'content', headerName: 'Content', width: 200 },
        {
            field: 'feature', headerName: 'Feature', width: 120,
            renderCell: (params =>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <InputLabel id="demo-select-small-label" size='small'>Feature</InputLabel>
                    <Select
                        defaultValue=""
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Age"
                    >
                        {
                            (Object.entries(params.row.feature).map((values, index) =>
                                <MenuItem key={index} value={values[1]}>{values[0]}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            )
        },
        { field: 'embeddedURL', headerName: 'EmbeddedURL', width: 130 },
        { field: 'imgVD', headerName: 'ImageVIDEO', width: 130 },
        {
            field: 'display', headerName: 'Active', width: 70, type: 'boolean',
            renderCell: (
                params =>
                    <FormControlLabel sx={{ marginLeft: '5px' }} control={<Switch color='error' size='small' checked={params.row.display}
                        onChange={() => {
                            setDataFilms(params.row)
                            if (params.row.display) {
                                setOpenDialogDel(true)
                            } else {
                                setOpenDialogReOpen(true)
                            }
                        }} />}
                    />)
        },
        {
            filed: '', headerName: 'Action', width: 130, renderCell: (params =>
                <IconButton size='small'
                    onClick={() => {
                        setDataFilms(params.row)
                        setOpenEditModal(true)
                    }}
                >
                    <EditNoteIcon fontSize='medium' color='warning' />
                </IconButton>
            )
        }]

    const getDataFromAPI = () => {
        fetch(baseURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP RESPONSE IS ERROR AT CODE ${response.status}`)
                }
                return response.json();
            })
            .then(result => {
                setFilm(result)
                setLoading(false);

            }).catch(error => {
                throw new Error(`Error has occurs: ${error} `)
            })
    }

    useEffect(() => {
        getDataFromAPI();
    }, [functionContext.value.reload])

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {isLoading && <div className="row" style={{
                minHeight: '100vh'
            }} />
            }

            {!isLoading &&
                <Stack
                    sx={{
                        height: '70vh',
                    }}
                    marginBottom={20}
                >
                    <Box
                        height={550}
                        width={"100%"}
                    >
                        <Stack justifyContent={'center'} direction={'row'} spacing={2} my={3}>
                            <Typography
                                variant='h4'
                                component={'h4'}
                                sx={{ textAlign: 'center', marginBottom: '5px' }}
                            >
                                Manage Film
                            </Typography>

                            <Link to={'/add'}>
                                <Button
                                    sx={{
                                        position: 'absolute',
                                        right: '4%'
                                    }}
                                    variant='contained'
                                    endIcon={<AddCircleOutlineIcon />}
                                >
                                    Create
                                </Button>
                            </Link>
                        </Stack>
                        <DataGrid
                            columns={columns}
                            rows={films}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: pageSize, page: 0
                                    }
                                }
                            }}
                            getRowId={row => row.id}
                            pageSizeOptions={[10, 15, 20]}
                            getRowSpacing={params => ({
                                top: params.isFirstVisible ? 0 : 5,
                                bottom: params.isLastVisible ? 0 : 5
                            })}
                            disableRowSelectionOnClick
                        >
                        </DataGrid>
                    </Box >
                </Stack >
            }
            {openEditModal && <Edit dataFilm={dataFilm} open={openEditModal} setOpen={setOpenEditModal} />}
            {openDialogDel && <DialogDel dataFilm={dataFilm} open={openDialogDel} setOpen={setOpenDialogDel} />}
            {openDialogReOpen && <DialogReOpen dataFilm={dataFilm} open={openDialogReOpen} setOpen={setOpenDialogReOpen} />}
        </>
    );
}