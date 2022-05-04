import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Production.css'
const Production = () => {
    const [production, setProduction] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/production')
            .then(res => res.json())
            .then(data => setProduction(data))
    }, [])
    return (
        <div className='container'>
            <div className='mt-4 flex d-flex align-items-center mb-5'>
                <h3 className='fw-bolder'> COLLECTION PRODUCTS </h3>
                <div style={{ width: '60%', height: '1px', margin: '5px', marginLeft: '20px', backgroundColor: '#ADAEAE' }} ></div>
            </div>

            <div className="production-callection " >
                {
                    production.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>



        </div>
    );
};

export default Production;