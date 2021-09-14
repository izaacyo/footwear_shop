import { getShoes } from "../../services/shoes";
import { addCart } from "../../services/shoes";

export const GET_SHOES = "GET_SHOES";
export const ADD_SHOES = "ADD_SHOES";
export const INIT_CARD = "INIT_SHOES";
export const REMOVE_SHOES = "REMOVE_SHOES";

export const intializeShoes = () => {
    return async (dispatch) => {
        const shoes = await getShoes();
        dispatch({
            type: GET_SHOES,
            data: shoes
        })
    }
}
export const addShoes = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_SHOES,
            data: product
        })
    }
}
export const removeShoes = (itemID) => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_SHOES,
            data: itemID
        })
    }
}


