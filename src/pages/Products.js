import React from 'react';
import { useSelector } from 'react-redux'

const Products = () => {

    const shoes = useSelector((state) => state);

    return (
        <ul>
            {shoes.map((shoe) => (
                <li
                    key={shoe.id}
                >  {shoe.name}</li>

            ))}
        </ul>
    );
};

export default Products;