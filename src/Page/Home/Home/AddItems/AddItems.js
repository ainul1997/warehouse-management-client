import React from 'react';
import { useForm } from "react-hook-form";



const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const addSubmit = data => {
        const url = `https://whispering-atoll-96026.herokuapp.com/production`;
        fetch(url, {
            method: 'POST',
            headers: {
                'constent-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div style={{ height: '800px', display: 'flex', justifyContent: 'center', backgroundColor: 'wheat' }} className=''>
            <div style={{ height: '500px', backgroundColor: 'white', width: '400px', marginTop: '30px' }}  >
                <h2 className='text-primary text-center mt-2 mb-5 '> Add Item</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(addSubmit)}>
                    <input className='mb-2 w-75 mx-auto rounded-pill text-center' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2 w-75 mx-auto rounded-pill text-center' placeholder='quantity'{...register("quantity")} />
                    <input className='mb-2 w-75 mx-auto rounded-pill text-center' placeholder='Price' type="number"{...register("price")} />
                    <textarea className='mb-2 w-75 mx-auto rounded-pill text-center' placeholder='Description'{...register("description")} />
                    <input className='mb-2 w-75 mx-auto rounded-pill text-center' placeholder='Photo URL' type="text"{...register("img")} />

                    <input className='mb-2 w-25 mx-auto rounded-pill text-center' type="submit" value={'submit'} />
                </form>
            </div>
            {/* <p>{products.description}</p>
            <p> Total Price: {products.price}</p>
            <p> Product Quantity: {products.quantity}</p> */}

        </div>
    );
};

export default AddItems;