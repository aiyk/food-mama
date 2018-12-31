import {
    GET_DISPATCH,
    GET_DISPATCHS,
    DISPATCH_LOADING
} from '../actions/types';

const initialState = {
    dispatchs: {
        metaData: {
            tblTitle: "Dispatch Management",
            tblSubtitle: "Food Dispatch Management Platform",
            trActions: true,
            trCheckbox: false,
            tblSummary: "a list of all dispatch activities"
        },

        actions: [
            {
                label: "Delivered",
                colorClass: "btn-outline-green",
                icon: "check.svg"
            },
            {
                label: "Rejected",
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
                Rider: {
                    Rider: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Order: {
                    Food: ["Eba and Egusi Soup"],
                    Amount: "#2,500",
                },
                status: "in-transit",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Rider: {
                    Rider: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Order: {
                    Food: ["Eba and Egusi Soup"],
                    Amount: "#2,500",
                },
                status: "in-transit",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Rider: {
                    Rider: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Order: {
                    Food: ["Eba and Egusi Soup"],
                    Amount: "#2,500",
                },
                status: "in-transit",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Customer: {
                    Customer: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Rider: {
                    Rider: "John Doe",
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    Image: ""
                },
                Order: {
                    Food: ["Eba and Egusi Soup"],
                    Amount: "#2,500",
                },
                status: "in-transit",
                Created: "2017-07-23T04:24:49-07:00"
            }
        ]
    },
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPATCH_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_DISPATCH:
            return {
                ...state,
                dispatch: action.payload,
                loading: false
            };
        case GET_DISPATCHS:
            return {
                ...state,
                dispatchs: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
