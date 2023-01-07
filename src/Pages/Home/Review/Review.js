import React from 'react';

const Review = ({ review }) => {
    return (
        <div className=' mx-auto my-10 '>
            <div className=" grid  card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel deserunt sapiente iure, laborum vero!</p>
                    <div className='flex items-center '>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-green-500 ring-offset-base-100 mr-5">
                            <img className='' src={review.img} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-2xl'>{review.name}</h2>
                        <p>{review.address}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;