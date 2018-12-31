import {
    GET_ORDER,
    GET_ORDERS,
    ORDER_LOADING
} from '../actions/types';

const initialState = {
    orders: {
        metaData: {
            tblTitle: "Order Management",
            tblSubtitle: "Food Orders Management Platform",
            trActions: true,
            trCheckbox: false,
            tblSummary: "a list of all thor orders placed on this platform"
        },

        actions: [
            {
                label: "Food Served",
                colorClass: "btn-outline-green",
                icon: "food.svg"
            },
            {
                label: "Cancel Order",
                colorClass: "btn-outline-red",
                icon: "times.svg"
            }
        ],

        collections: [
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Food: ["Eba and Egusi Soup"],
                Amount: "#2,500",
                status: "pending",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Food: ["Fried Rice and Chicked", "Five Alive"],
                Amount: "#2,500",
                status: "pending",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Food: ["Eba and Egusi Soup", "Eva Water"],
                Amount: "#2,500",
                status: "dispatched",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Food: ["Eba and Egusi Soup"],
                Amount: "#2,500",
                status: "served",
                Created: "2017-07-23T04:24:49-07:00"
            }
        ]
    },
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ORDER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ORDER:
            return {
                ...state,
                order: action.payload,
                loading: false
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
