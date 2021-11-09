import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()

    const handleOnblur = e => {
        setEmail(e.target.value)
    }
    const hanldeAdminSubmit = e => {
        const user = { email }
        fetch('https://serene-citadel-12756.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={hanldeAdminSubmit}>
                <input type='email' placeholder='Email' style={{ width: '25%', height: '35px' }} onBlur={handleOnblur} />
                <input type='submit' value='Make Admin' style={{ backgroundColor: '#2CC6CA', border: 'none', color: 'white', height: '35px' }} />
            </form>
            {
                success && <Alert severity="success">Admin Successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;