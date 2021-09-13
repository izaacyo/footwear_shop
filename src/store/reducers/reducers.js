import * as actionTypes from "../actions/actions";

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_SHOES:
            return action.data;
        case actionTypes.REMOVE_SHOES:
            return [...state, action.data];
        default:
            return state;
    }
};

export default reducer