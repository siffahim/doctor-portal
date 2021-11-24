import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    onBlur={e => setName(e.target.value)}
                    sx={{ width: '50%' }}
                    required
                    label="Name"
                    variant="standard"
                />
                <br />
                <TextField
                    onBlur={e => setEmail(e.target.value)}
                    sx={{ width: '50%' }}
                    type='email'
                    required
                    label="Email"
                    variant="standard"
                />
                <br />
                <Input
                    accept="image/*"
                    sx={{ my: 3 }}
                    onChange={e => setImage(e.target.files[0])}
                    type="file"
                />
                <br />
                <Button variant="contained" type='submit' >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;