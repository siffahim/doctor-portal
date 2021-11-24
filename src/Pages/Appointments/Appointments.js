import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const { user, token } = useAuth();
    useEffect(() => {
        const url = `https://serene-citadel-12756.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date])
    return (
        <div>
            <h2>Appointment {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ? 'Paid' :
                                    <Link to={`dashboard/payment/${row._id}`}><button>Pay</button></Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;