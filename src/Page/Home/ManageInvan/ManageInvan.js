import React from 'react';
import useProduction from '../../../Hooks/UseProduction/useProduction';
import './ManageInvan.css'

const ManageInvan = () => {
    const [production, setProduction] = useProduction();
    const handleDelete = id => {
        const procees = window.confirm('Are you sure?');
        if (procees) {
            const url = `https://whispering-atoll-96026.herokuapp.com/production/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remain = production.filter(service => service._id !== id);
                    setProduction(remain)
                })
        }
    }
    return (
        <div className="production-callection mb-5">
            {
                production.map(product => <div key={product._id}>
                    <div className='container mb-5'>
                        <div className='box'>
                            <div className='imgBx'>
                                <img style={{ height: '500px' }} className='w-100' src={product.img} alt="" />
                            </div >
                            <div className='content'>
                                <div>
                                    <h2 className='fw-bolder'>{product.name}</h2>
                                    <p className=''>Price:$ {product.price}</p>
                                    <p className=''>Quantity: {product.quantity}</p>
                                    <p className=''> {product.description}</p>
                                    <div className="d-flex justify-content-center">
                                        <button className='btn ' onClick={() => handleDelete(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div >

                    </div >

                </div >)
            }
        </div >
    );
};

export default ManageInvan;