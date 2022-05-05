import './Service.css'
import React from 'react';



const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div  >
            <div className='content_cont mt-5'>
                <div className='content-box p-2 flex d-flex'>
                    <div><h3 className='fw-bolder fs-6 mt-3'>{name}</h3>
                        <p className='text-capitalize fw-lighter fs-6'> {description}</p>
                    </div>
                    <div>
                        <img style={{ height: '50px', marginTop: '20px', marginRight: '5px', marginLeft: '5px' }} src={img} alt="" />
                    </div>
                </div>

                <div className='border-box'></div>
            </div>
            <div className=''>

            </div>
        </div>




    );
};

export default Service;