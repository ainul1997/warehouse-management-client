import { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'


const Services = () => {
    const [production, setProduction] = useState([]);

    useEffect(() => {
        fetch('https://whispering-atoll-96026.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProduction(data))
    }, []);
    return (
        <div style={{ marginTop: '50px' }} className="container mt-6">
            <div className='mt-4 flex d-flex align-items-center '>
                <div style={{ width: '40%', height: '1px', margin: '5px', marginLeft: '20px', backgroundColor: '#ADAEAE' }} ></div>
                <h3 className='fw-bolder ms-5'> OUR SERVICES </h3>
            </div>
            <div>
                <div className="Services-callection " >
                    {
                        production.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;