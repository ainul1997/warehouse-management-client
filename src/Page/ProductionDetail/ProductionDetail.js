import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductionDetils from '../../Hooks/UseProduction/useProductionDetils';





const ProductionDetail = () => {
    const { productionId } = useParams();
    const [products] = useProductionDetils(productionId);
    console.log(products)

    // const [products, setProducts] = useState({});
    // useEffect(() => {
    //     const url = 'http://localhost:5000/production';

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])


    return (
        <div>
            <h2>{products}</h2>
            {/* 
            {
                products.map(producted => <ul> <li> {producted.name}</li></ul>)
            } */}
        </div>

    );
};

export default ProductionDetail;