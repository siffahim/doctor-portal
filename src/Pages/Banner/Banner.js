import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../images/bg.png';
import banner from '../../images/chair.png';

const bannerBg = {
    background: `url(${bg})`
}

const varticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={varticalCenter} sx={{ textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                            Your new smile <br /> start here
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 14, my: 3, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi recusandae. Ullam facilis consequatur labore, quis maxime cumque minus blanditiis.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: '#2CC6CA' }}>Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={varticalCenter}>
                    <img width='350' src={banner} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;