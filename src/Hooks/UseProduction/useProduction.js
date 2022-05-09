import React, { useEffect, useState } from 'react';

const useProduction = () => {

    const [production, setProduction] = useState([]);

    useEffect(() => {
        fetch('https://whispering-atoll-96026.herokuapp.com/production')
            .then(res => res.json())
            .then(data => setProduction(data));
    }, []);
    return [production, setProduction]

}



export default useProduction;

