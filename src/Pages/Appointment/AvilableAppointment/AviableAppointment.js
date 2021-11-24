import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 10:00 AM",
        price: 15,
        space: 10
    },
    {
        id: 2,
        name: "Teeth Cleaning",
        time: "10:00 AM - 12:00 AM",
        price: 17,
        space: 8
    },
    {
        id: 3,
        name: "Cosmetic Dentistry",
        time: "8:00 AM - 10:00 AM",
        price: 13,
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "3:00 PM - 5:00 PM",
        price: 18,
        space: 10
    },
    {
        id: 5,
        name: "Teeth Repier",
        time: "8:00 AM - 10:00 AM",
        price: 20,
        space: 10
    },
    {
        id: 6,
        name: "Teeth Ace",
        time: "7:00 PM - 9:00 PM",
        price: 19,
        space: 10
    }
]

const AviableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{ fontWeight: 600, color: '#2CC6CA', my: 3 }}>Available Appointment {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Successfully Booked Appointment</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(book => <Booking
                        key={book.id}
                        booking={book}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AviableAppointment;