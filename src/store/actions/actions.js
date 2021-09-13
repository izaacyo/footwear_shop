import { getShoes } from "../../services/shoes";

export const GET_SHOES = "GET_SHOES";
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