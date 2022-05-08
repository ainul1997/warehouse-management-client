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
        <div>
            <div>
                <img src={products.img} alt="" />
            </div>

        </div>

    );
};

export default ProductionDetail;