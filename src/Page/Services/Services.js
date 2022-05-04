import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/production')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ marginTop: '50px' }} className="container mt-6">
            <div className='mt-4 flex d-flex align-items-center '>
                <div style={{ width: '60%', height: '1px', margin: '5px', marginLeft: '20px', backgroundColor: '#ADAEAE' }} ></div>
                <h3 className='fw-bolder ms-5'> OUR SERVICES </h3>
            </div>
        </div>
    );
};

export default Services;