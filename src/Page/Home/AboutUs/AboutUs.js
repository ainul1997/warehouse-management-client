import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div style={{ paddingBottom: '50px' }} className='About-callection mt-5 mb-5'>
            <div className=' '>
                <div className='mt-4 flex d-flex align-items-center '>
                    <h3 className='fw-bolder ms-5'> ABOUT US </h3>
                    <div style={{ width: '30%', height: '1px', margin: '5px', marginLeft: '20px', backgroundColor: '#ADAEAE' }} ></div>
                </div>
                <div className='p-3'>
                    <p>But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing.
                    </p>
                </div>
            </div>
            <div style={{ height: '400px', width: '500px', boxShadow: '0 5px 15px rgba(0, 0, 0, .2)' }} className='mt-5 p-4 me-3'>
                <div>
                    <h3 className='fw-bolder ms-5'> REQUEST A QUICK QUOTE </h3>
                    <p>But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count.</p>
                </div>
                <div>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input className="form-label" type="text" placeholder="First and Last Name" required />
                        </div>
                        <div className="col-md-6">

                            <input className="form-label" type="text" placeholder="Subject" required />
                        </div>
                        <div className="col-md-6">

                            <input className="form-label" type="text" placeholder="E-mail address" required />
                        </div>
                        <div className="col-md-6">
                            <select className="form-select" required aria-label="select example">
                                <option value=""> Transport</option>
                                <option value="1">Storage</option>
                            </select>
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>

                        <div className="col-md-6">

                            <textarea type="" placeholder="Message" required />
                        </div>


                        <div className="col-12">
                            <button className="btn btn-primary" type="submit"> SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;