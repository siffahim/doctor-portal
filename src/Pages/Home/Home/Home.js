import React from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import Banner from '../../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;