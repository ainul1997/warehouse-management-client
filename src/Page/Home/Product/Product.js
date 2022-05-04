import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;
    return (

        <div className='container'>
            <div className='box'>
                <div className='imgBx'>
                    <img style={{ height: '500px' }} className='w-100' src={img} alt="" />
                </div>
                <div className='content'>
                    <div>
                        <h2 className='fw-bolder'>{name}</h2>
                        <p className='fw-lighter'>Price: {price}</p>
                        <p className='text-capitalize fw-lighter'> {description}</p>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default Product;