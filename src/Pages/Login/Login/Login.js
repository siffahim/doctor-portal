import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, isLoading, googleSignIn, loginUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    //onchange both 
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate)
    }

    const handleGoogleSign = () => {
        googleSignIn(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1' sx={{ mt: 5 }}>Log in</Typography>
                    {
                        !isLoading && <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                name='email'
                                onBlur={handleOnChange}
                                label="Email"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onBlur={handleOnChange}
                                type='password'
                                variant="standard"
                            />
                            <Button type='submit' sx={{ width: '75%', m: 3 }} variant='contained'>Login</Button><br />
                            <NavLink to='/register'>
                                <Button variant='text'>Register</Button>
                            </NavLink>
                            {
                                isLoading && <CircularProgress color="success" />
                            }
                            {
                                user.email && <Alert severity="success">Successfully login account</Alert>
                            }
                            {
                                error && <Alert severity="error">{error}</Alert>
                            }
                        </form>
                    }
                    <p>_________OR__________</p>
                    <Button variant='contained' onClick={handleGoogleSign} sx={{ backgroundColor: 'success.main' }}>continue with google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '90%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;