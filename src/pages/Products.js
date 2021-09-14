import React from 'react';
import { useSelector } from 'react-redux'

const Products = () => {

    const shoes = useSelector((state) => state.shoes);
    console.log(shoes)
    // const products = useSelector((state) => state.products)
    return (
        <div>
            <p>this is product page </p>
            <ul>
                {shoes.map(i => <li>{i.name}</li>)}
            </ul>
        </div>
    );
};

export default Products;