import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Portal
                    </Typography>
                    <Link to='/appointment'>Appointment</Link>
                    {
                        user?.email ? <Box>
                            <Link to='/dashboard'>
                                <button sx={{ color: 'white', textDecoration: 'none' }} color="inherit">Dashboard</button>
                            </Link>
                            <button variant='contained' onClick={logOut}>Logout</button>
                        </Box> : <Link to='/login'>
                            <button color="white">Login</button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;