export const initialState = {
    basket : [
            {
        id : 1,
        name : 'Relaxed Fit Sweatshirt',
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F78%2Fcc783b01c22bb9a1f73293e2ac74c6d4c2727298.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]',
        price : 2999,
        color : 'Blue',
        categorysize : 'XL',
        categorytype : 'SweatShirts',
        stocksize : 9

    }
    ],
};

export const getbasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0);

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