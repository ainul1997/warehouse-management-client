import React, { useEffect, useState } from 'react';

const useProductionDetils = productionId => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/production/${productionId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productionId])

    return [products]
};

export default useProductionDetils;