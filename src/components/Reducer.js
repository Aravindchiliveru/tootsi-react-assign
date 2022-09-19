export const initialState = {
    basket : [],
};

const reducer =(state, action) => {
    console.log(action)
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket :[...state.basket, action.item],
            };
            default :
            return state;
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            }
    }
};

export default reducer