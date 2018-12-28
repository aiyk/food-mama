import {
    GET_BRANCH,
    GET_BRANCHES,
    BRANCH_LOADING
} from '../actions/types';

const initialState = {
    branches: {
        metaData: {
            tblTitle: "Branch Management",
            tblSubtitle: "Registered Branches Management Platform",
            trActions: true,
            trCheckbox: false,
            tblSummary: "a list of all branches currently registered on this platform"
        },

        collections: [
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Branch: "Global Funds ltd",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Branch: "Joel Jones and Co",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Branch: "Swift Mobile",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Branch: "Globacomm Nigeria ltd",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            }
        ]
    },
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BRANCH_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_BRANCH:
            return {
                ...state,
                branch: action.payload,
                loading: false
            };
        case GET_BRANCHES:
            return {
                ...state,
                branches: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
