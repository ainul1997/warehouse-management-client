import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';



const ProductionDetail = () => {
    const { productionId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/production/${productionId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div className='d-flex justify-content-center'>
            <div style={{ height: '550px', width: '800px' }} className=' d-flex justify-content-center border m-5'>
                <div className='mt-3 ms-3 '>
                    < img style={{ height: '500px', width: '300px' }} src={products.img} alt="" />
                </div>
                <div className=' mt-5 mx-5 '>
                    <h3>{products.name}</h3>
                    <p>{products.description}</p>
                    <p> Total Price: {products.price}</p>
                    <p> Product Quantity: {products.quantity}</p>
                    <div className='d-flex justify-content-center '>
                        <button className='btn border rounded '>Delivered</button>
                    </div>
                    <div className='mt-5 mx-5 '>
                        <form className=' mx-5'>
                            <input type="text" />
                            <div className='d-flex justify-content-center mt-2 '>
                                <button className='btn border rounded '>Add Item</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductionDetail;