import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const dataConnet = async () => {
            const res = await fetch('https://serene-citadel-12756.herokuapp.com/doctors')
            const data = await res.json()
            setDoctors(data)
        }
        dataConnet()
    }, [])
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                doctors.map(doctor => <Doctor
                    key={doctor.name}
                    doctor={doctor}
                />)
            }
        </Grid>
    );
};

export default Doctors;