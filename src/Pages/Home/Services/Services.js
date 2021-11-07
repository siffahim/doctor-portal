import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: "Fluoride",
        description: "Sing pilgrimage was will parting few have suits muse, childe his in in haply like feud in the. Below in he departed ah haply seraphs, clay lay the hall and..",
        img: fluoride
    },
    {
        name: "Cavity",
        description: "Sing pilgrimage was will parting few have suits muse, childe his in in haply like feud in the. Below in he departed ah haply seraphs, clay lay the hall and..",
        img: cavity
    },
    {
        name: "Whitening",
        description: "Sing pilgrimage was will parting few have suits muse, childe his in in haply like feud in the. Below in he departed ah haply seraphs, clay lay the hall and..",
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" sx={{fontWeight: 'bold',m:2,color:'success.main'}} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{fontWeight: 'bold',m:2,}} component="div">
                  SERVICE WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}    
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;