import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Production.css'
const Production = () => {
    const [production, setProduction] = useState([]);


    useEffect(() => {
        fetch(`https://whispering-atoll-96026.herokuapp.com/production`)
            .then(res => res.json())
            .then(data => setProduction(data))
    }, []);
    return (
        <div className='container'>
            <div className='mt-4 flex d-flex align-items-center mb-5'>
                <h3 className='fw-bolder'> COLLECTION PRODUCTS </h3>
                <div style={{ width: '40%', height: '1px', margin: '5px', marginLeft: '20px', backgroundColor: '#ADAEAE' }} ></div>
            </div>

            <div className="production-callection " >
                {
                    production.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>




    );
};

export default Production;