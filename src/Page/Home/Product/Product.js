import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity } = product;

    const navigate = useNavigate();
    const navigateToProductionDetail = id => {
        navigate(`/production/${_id}`)
    }
    return (

        <div className='container'>
            <div className='box'>
                <div className='imgBx'>
                    <img style={{ height: '500px' }} className='w-100' src={img} alt="" />
                </div>
                <div className='content'>
                    <div>
                        <h2 className='fw-bolder'>{name}</h2>
                        <p className=''>Price:$ {price}</p>
                        <p className=''>Quantity: {quantity}</p>
                        <p className=''> {description}</p>
                        <div className="d-flex justify-content-center">
                            <button onClick={() => navigateToProductionDetail(_id)} className='btn '>MANAGE</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    );
};

export default Product;