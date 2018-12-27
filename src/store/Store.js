import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const initState = {
    metaData: {
        tblTitle: "User Management",
        tblSubtitle: "System Administrators and Riders Management Platform",
        trActions: true,
        trCheckbox: false,
        tblSummary: "the table is a brief breakdown of all the accumulated wealth of britecore's clientale"
    },

    collections: [
        {
            ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
            Name: "Kyra Lester",
            Phone: "08032323212",
            Email: "aiyk.ekwe@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "System Admin",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "34122A17-401F-9633-BF81-4CADA6FD5C79",
            Name: "Joel Ebuka",
            Phone: "08032323212",
            Email: "joel.ebuka@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "System Admin",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
            Name: "Danlami Mali",
            Phone: "08032323212",
            Email: "danlami.mali@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "Rider",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
            Name: "Danlami Mali",
            Phone: "08032323212",
            Email: "danlami.mali@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "Rider",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
            Name: "Danlami Mali",
            Phone: "08032323212",
            Email: "danlami.mali@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "Rider",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
            Name: "Danlami Mali",
            Phone: "08032323212",
            Email: "danlami.mali@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "Rider",
            Created: "2017-07-23T04:24:49-07:00"
        },
        {
            ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
            Name: "Sandra Emeka",
            Phone: "08032323212",
            Email: "sandra.emeka@gmail.com",
            Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
            Role: "Point Of Sale",
            Created: "2017-07-23T04:24:49-07:00"
        }
    ]
};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;