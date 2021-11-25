import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        const pay = async () => {
            const res = await fetch(`https://serene-citadel-12756.herokuapp.com/appointments/${appointmentId}`)
            const data = await res.json()
            setAppointment(data)
        }
        pay()
    }, [])
    console.log(appointment.price)
    return (
        <div>
            <typography sx={{ fontSize: 'h6.fontSize' }}>{appointment.patientName} Payment for {appointment.serviceName}</typography>
            <h2>Pay ${appointment?.price}</h2>

            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }

        </div>
    );
};

export default Payment;