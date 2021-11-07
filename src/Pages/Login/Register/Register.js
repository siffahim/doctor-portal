import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { register, isLoading, user, error } = useAuth();
    const history = useHistory()

    //onchange both 
    const handleFormInput = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Please enter same password');
            return;
        }
        register(loginData.email, loginData.password, loginData.name, history)
        e.target.reset()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ m: 'auto' }}>
                    <Typography variant='body1' sx={{ mt: 5 }}>Register</Typography>
                    {!isLoading && <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='text'
                            name='name'
                            onBlur={handleFormInput}
                            label="Name"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='email'
                            name='email'
                            onBlur={handleFormInput}
                            label="Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleFormInput}
                            type='password'
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-password"
                            name="password2"
                            onBlur={handleFormInput}
                            type='password'
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 3 }} type='submit' variant='contained'>Register</Button><br />
                        <p>alrady an account?<NavLink to='/login'>
                            <Button variant='text'>Login</Button>
                        </NavLink></p>
                    </form>
                    }
                    {
                        isLoading && <CircularProgress color="success" />

                    }
                    {
                        user.email && <Alert severity="success">Successfully created account</Alert>

                    }
                    {
                        error && <Alert severity="error">{error}</Alert>

                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '90%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;