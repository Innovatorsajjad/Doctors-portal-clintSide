import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto px-12'>
            <InfoCard cardTittle = " Opening Hours" bgClass ="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTittle = " Our Locations" bgClass ="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTittle = " Contact us" bgClass ="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default info;