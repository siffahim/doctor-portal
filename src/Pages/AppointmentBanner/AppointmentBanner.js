import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../images/appointment-bg.png';
import img from '../../images/doctor.png';

const styleBg = {
    background: `url(${bg})`,
    backgroundColor: '#094D77',
    backgroundBlendMode: 'darken',
    marginTop: '100px'
}

const AppointmentBanner = () => {
    return (
        <Grid container spacing={2} style={styleBg}>
            <Grid item xs={12} md={6}>
                <img style={{ width: '400px', marginTop: '-110px' }} src={img} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'left'
            }}>
                <Box>
                    <Typography variant='h5' sx={{ color: '#2CC6CA', fontWeight: 'bold', mb: 3 }}>
                        Appoinment
                    </Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>
                        Make an Appoinment Today
                    </Typography>
                    <Typography variant='h6' sx={{ my: 4, fontSize: '14px', fontWeight: 300, color: 'white' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur accusantium, eius deserunt repellendus delectus at provident saepe ea impedit.
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: '#2CC6CA' }}>Learn More</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;