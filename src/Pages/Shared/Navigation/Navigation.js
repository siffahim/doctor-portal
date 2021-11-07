import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
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
                                <Button sx={{ color: 'white', textDecoration: 'none' }} color="inherit">Dashboard</Button>
                            </Link>
                            <Button variant='contained' onClick={logOut}>Logout</Button>
                        </Box> : <Link to='/login'>
                            <Button variant='contained' onClick={logOut}>Login</Button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;