import { Button, Fade } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    p: 4,
};

const BookingModal = ({ openModal, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookings, setBookings] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookings };
        newInfo[field] = value;
        setBookings(newInfo)
    }

    const handleAppoinmentSubmit = e => {
        const appoinment = {
            ...bookings,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        console.log(appoinment)
        //send to server with database
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" sx={{ color: '#2CC6CA', textAlign: 'center' }} variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleAppoinmentSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='phone'
                            onBlur={handleOnBlur}
                            defaultValue='Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='date'
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type='submit' variant='contained' sx={{ backgroundColor: '#2CC6CA', m: 1 }}>CONFIRM BOOKED</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;