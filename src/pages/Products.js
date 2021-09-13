import React from 'react';
import { useSelector } from 'react-redux'

const Products = () => {

    const shoes = useSelector((state) => state);
    console.log(shoes)


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