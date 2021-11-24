import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const dataConnet = async () => {
            const res = await fetch('http://localhost:5000/doctors')
            const data = await res.json()
            setDoctors(data)
        }
        dataConnet()
    }, [])
    return (
        <div>
            <h2>doctors: {doctors.length}</h2>
        </div>
    );
};

export default Doctors;