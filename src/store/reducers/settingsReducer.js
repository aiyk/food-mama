import {
    GET_ROLE,
    GET_ROLES,
    ROLE_LOADING,

    GET_WALLET,
    GET_WALLETS,
    WALLET_LOADING,

    GET_FOODCATEGORY,
    GET_FOODCATEGORIES,
    FOODCATEGORY_LOADING,

    GET_MEMBERSHIP,
    GET_MEMBERSHIPS,
    MEMBERSHIP_LOADING
} from '../actions/types';

const initialState = {
    settings: {

        roles: {
            metaData: {
                tblTitle: "User Roles",
                tblSubtitle: "User Roles Management Platform",
                trActions: true,
                trCheckbox: false,
                tblSummary: "a list of all roles currently available on this platform"
            },

            collections: [
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    role: "Global Admin",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    role: "Branch Admin",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    role: "Point of Sale",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    role: "Rider",
                    Created: "2017-07-23T04:24:49-07:00"
                }
            ]
        },

        walletTypes: {
            metaData: {
                tblTitle: "Wallet Types",
                tblSubtitle: "Wallet Types Management Platform",
                trActions: true,
                trCheckbox: false,
                tblSummary: "a list of all wallet types currently available on this platform"
            },

            collections: [
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    walletType: "Bronze",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    walletType: "Ruby",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    walletType: "Gold",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    walletType: "Diamond",
                    Created: "2017-07-23T04:24:49-07:00"
                }
            ]
        },

        foodCategory: {
            metaData: {
                tblTitle: "Food Categories",
                tblSubtitle: "Food Categories Management Platform",
                trActions: true,
                trCheckbox: false,
                tblSummary: "a list of all food categories currently available on this platform"
            },

            collections: [
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    foodCategory: "Continental Dishes",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    foodCategory: "African Dishes",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    foodCategory: "Pastries",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    foodCategory: "Breverages",
                    Created: "2017-07-23T04:24:49-07:00"
                }
            ]
        },

        membershipPlan: {
            metaData: {
                tblTitle: "Membership Plan",
                tblSubtitle: "Membership Plan Management Platform",
                trActions: true,
                trCheckbox: false,
                tblSummary: "a list of all membership plan currently available on this platform"
            },

            collections: [
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    membershipPlan: "Bronze",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    membershipPlan: "Ruby",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    membershipPlan: "Gold",
                    Created: "2017-07-23T04:24:49-07:00"
                },
                {
                    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    membershipPlan: "Diamond",
                    Created: "2017-07-23T04:24:49-07:00"
                }
            ]
        },
    },
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ROLE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ROLE:
            return {
                ...state,
                role: action.payload,
                loading: false
            };
        case GET_ROLES:
            return {
                ...state,
                roles: action.payload,
                loading: false
            };

        case WALLET_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_WALLET:
            return {
                ...state,
                wallet: action.payload,
                loading: false
            };
        case GET_WALLETS:
            return {
                ...state,
                wallets: action.payload,
                loading: false
            };

        case FOODCATEGORY_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_FOODCATEGORY:
            return {
                ...state,
                foodcategory: action.payload,
                loading: false
            };
        case GET_FOODCATEGORIES:
            return {
                ...state,
                foodcategories: action.payload,
                loading: false
            };

        case MEMBERSHIP_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_MEMBERSHIP:
            return {
                ...state,
                membership: action.payload,
                loading: false
            };
        case GET_MEMBERSHIPS:
            return {
                ...state,
                memberships: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
