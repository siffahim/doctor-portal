import { Grid } from '@mui/material';
import React from 'react';
import Appointments from '../../Appointments/Appointments';
import Calender from '../../Shared/Calender/Calender';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calender
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointments date={date} />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;