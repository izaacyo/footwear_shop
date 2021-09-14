import React from "react";

import { useDispatch } from "react-redux";
import { addShoes } from "../store/actions/actions";


const ShoesCart = () => {
    const dispatch = useDispatch();

    const shoesCart = async (e) => {

        e.prevantDefault();
        const shoes = e.target.quantity.value;
        dispatch(addShoes(shoes));
        e.target.quantity.value = 0

    }
    return (
        <form onSubmit={shoesCart}>
            <label for="quantity">Quantity (between 1 and 5):</label>
            <input type="number" id="quantity" name="quantity" min="1" max="5" />
            <input type="submit" value="Submit" />
        </form>
    )

}

export default ShoesCart