import {
    GET_ENTERPRISE,
    GET_ENTERPRISES,
    ENTERPRISE_LOADING
} from '../actions/types';

const initialState = {
    enterprises: {
        metaData: {
            tblTitle: "Enterprise Management",
            tblSubtitle: "Registered Enterprises Management Platform",
            trActions: true,
            trCheckbox: false,
            tblSummary: "a list of all enterprises currently registered on this platform"
        },

        collections: [
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Enterprise: "Global Funds ltd",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Enterprise: "Joel Jones and Co",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Enterprise: "Swift Mobile",
                Phone: "08032323212",
                Email: "aiyk.ekwe@gmail.com",
                Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
                Created: "2017-07-23T04:24:49-07:00"
            },
            {
                ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                Enterprise: "Globacomm Nigeria ltd",
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
        case ENTERPRISE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ENTERPRISE:
            return {
                ...state,
                enterprise: action.payload,
                loading: false
            };
        case GET_ENTERPRISES:
            return {
                ...state,
                enterprises: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
