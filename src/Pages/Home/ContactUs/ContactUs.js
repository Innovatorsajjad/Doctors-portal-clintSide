import React from 'react';
import aboutBg from "../../../assets/images/appointment.png"

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${aboutBg})`,
            backgroundSize: 'cover'
        }}>

            <div className="hero  py-20">
                <div>
                    <h3 className='text-primary text-xl'>Contact Us</h3>
                    <h1 className='text-3xl my-4'>Stay connected with us.</h1>
                </div>
                <div className="card flex-shrink-0 w-full  max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                            <label className="label">
                                <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;