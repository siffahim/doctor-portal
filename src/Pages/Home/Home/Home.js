import React from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import Banner from '../../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner />
            <Doctors />
        </div>
    );
};

export default Home;