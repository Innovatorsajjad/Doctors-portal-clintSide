import React from 'react';
import treatment from "../../../assets/images/treatment.png" 
import Button from '../../../Sheard/Button/Button';

const Banner2 = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exeptional dantal care on your tarms.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;