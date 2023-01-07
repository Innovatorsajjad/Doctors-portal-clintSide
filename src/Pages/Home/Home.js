import React from 'react';
import Banner from './Banner/Banner';
import Info from '../Home/Info/Info';
import Services from './Services/Services';
import Banner2 from './Banner2/Banner2';
import Appointment from './Appointment/Appointment';
import Testimonials from './Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Banner2/>
            <Appointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;