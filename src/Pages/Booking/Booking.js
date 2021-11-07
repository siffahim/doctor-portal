import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3} >
                    <Typography variant='h5' sx={{ fontWeight: 600, color: '#2CC6CA', mb: 1 }}>
                        {name}
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '18px' }}>
                        {time}
                    </Typography>
                    <Typography variant='caption' display='block' gutterBottom sx={{ my: 1 }}>
                        {space}SPACES AVAILEAVLE
                    </Typography>
                    <Button onClick={handleOpen} variant='contained' sx={{ backgroundColor: '#2CC6CA', }}>BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                openModal={openModal}
                handleClose={handleClose}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;