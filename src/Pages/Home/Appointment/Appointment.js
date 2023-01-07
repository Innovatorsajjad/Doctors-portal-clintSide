import React from 'react';
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png"
import Button from '../../../Sheard/Button/Button';

const Appointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex rounded-sm p-7'>
            <div className="flex-1 hidden lg:block">
                <img className='w-2/4 mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1 justify-center my-auto">
                <h4 className='text-3xl text-primary font-bold my-3'>Appointment !</h4>
                <h2 className='text-white text-3xl my-5'>Make Appointment Today...</h2>
                <p className='text-white text-xl mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut quod impedit repudiandae minus odit ad doloremque quia quidem fugit a ducimus animi ullam optio earum commodi, adipisci blanditiis est, sint sit, dolorum aliquid voluptatem. Ratione vero ipsam cum recusandae?</p>
                <Button>Get started</Button>
            </div>
        </section>
    );
};

export default Appointment;