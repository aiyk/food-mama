import {
    GET_FOOD,
    GET_FOODS,
    FOOD_LOADING
} from '../actions/types';

const initialState = {
    foods: {
        metaData: {
            tblTitle: "Food Management",
            tblSubtitle: "Food Menu Management Platform",
            trActions: true,
            trCheckbox: false,
            tblSummary: "a list of all food currently sold on this platform"
        },

        collections: [
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Image: "",
                Food: "Eba and Egusi Soup",
                Category: "African Dishes",
                Preorder: false,
                Price: "2500",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CAJA6FD5C79",
                Image: "",
                Food: "Fried Rice",
                Category: "Intercontinental Dishes",
                Preorder: false,
                Price: "1000",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BN81-4CADA6FD5C79",
                Image: "",
                Food: "Chicked and Chips",
                Category: "Intercontinental Dishes",
                Preorder: false,
                Price: "2000",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-406F-9633-BF81-4CADA6FD5C79",
                Image: "",
                Food: "Burger",
                Category: "Pastries",
                Preorder: true,
                Price: "1200",
                Created: "2017-07-23T04:24:49-07:00"
            }
        ]
    },
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FOOD_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_FOOD:
            return {
                ...state,
                food: action.payload,
                loading: false
            };
        case GET_FOODS:
            return {
                ...state,
                foods: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
