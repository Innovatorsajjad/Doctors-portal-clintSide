import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Review from '../Review/Review';
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"

const Testimonials = () => {
    const reviews =[
        {
            _id :1,
            name:"Winson Harry",
            address:"California",
            review:"the best treatment they provide us.",
            img:people1
        },
        {
            _id :2,
            name:"Momold fhvnd",
            address:"California",
            review:"the best treatment they provide us.",
            img:people2
        },
        {
            _id :3,
            name:"SalQuid skthf",
            address:"California",
            review:"the best treatment they provide us.",
            img:people3
        },
    ]
    return (
        
        <section>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                <h2 className='text-3xl'>What our Patients say...</h2>
            </div>
            <div>
                <img className='lg:w-48 w-24' src={quote} alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
            {
                reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
        </section>
    );
};

export default Testimonials;