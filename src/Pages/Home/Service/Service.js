import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0,border:0 }}>
                <CardMedia
                    component="img"
                    style={{width:'auto',height:'100px',margin:'0 auto'}}
                    image={img}
                    alt="img"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{color:'text.secondary'}}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;