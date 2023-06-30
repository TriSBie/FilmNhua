import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MovieIcon from '@mui/icons-material/Movie';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { Link } from 'react-router-dom';


const actions = [
    {
        icon: <Link to={'/admin'}><DashboardIcon color='primary' /></Link>, name: 'Admin'
    },
    {
        icon: <Link to={'/add'}><MovieIcon color='primary' /></Link>, name: 'Add'
    },
    {
        icon: <Link to={'/'}><AutoAwesomeMotionIcon color='primary' /></Link>, name: 'Home'
    },
];



export default function SpeedDialAdmin() {

    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 5 }}
                icon={<SpeedDialIcon openIcon=<DesktopMacIcon /> />}
            >

                {actions.map((action) => {
                    return <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                })}
            </SpeedDial>
        </Box>
    );
}