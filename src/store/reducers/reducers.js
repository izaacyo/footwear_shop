import * as actionTypes from "../actions/actions";

const reducer = (state = [], action) => {

    if (actionTypes === "GET_SHOES") {
        return action.data
    } else {
        return state
    }
}

export default reducer