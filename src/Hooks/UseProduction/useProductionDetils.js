import React, { useEffect, useState } from 'react';

const useProductionDetils = productionId => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://whispering-atoll-96026.herokuapp.com/production/${productionId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productionId])

    return [products]
};

export default useProductionDetils;