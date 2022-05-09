import React, { useEffect, useState } from 'react';

const useProduction = () => {

    const [production, setProduction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/production`)
            .then(res => res.json())
            .then(data => setProduction(data));
    }, []);
    return [production, setProduction]

}



export default useProduction;

