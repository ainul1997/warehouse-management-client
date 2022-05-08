import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductionDetils from '../../Hooks/UseProduction/useProductionDetils';





const ProductionDetail = () => {
    const { productionId } = useParams();

    return (
        <div>
            <h1> {productionId}</h1>

        </div>

    );
};

export default ProductionDetail;