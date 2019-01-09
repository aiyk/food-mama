import {
  GET_USER,
  GET_USERS,
  USER_LOADING,
  CLEAR_CURRENT_USER
} from '../actions/types';

const initialState = {
  user: {
    ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
    Name: "Kyra Lester",
    Phone: "08032323212",
    Email: "aiyk.ekwe@gmail.com",
    Address: "No 2B Vernern Cresent, Alausa, Ikeja-Lagos, Nigeria.",
    Role: "System Admin",
    Created: "2017-07-23T04:24:49-07:00"
  },
  metaData: {
    tblTitle: "User Management",
    tblSubtitle: "System Administrators and Riders Management Platform",
    trActions: true,
    trCheckbox: false,
    tblSummary: "the table is a brief breakdown of all the accumulated wealth of britecore's clientale"
  },
  actions: [
    {
      label: "Edit User",
      colorClass: "btn-outline-blue",
      icon: "edit.svg"
    },
    {
      label: "Delete",
      colorClass: "btn-outline-red",
      icon: "trash.svg"
    }
  ],
  collections: [
    {
      ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
      Name: "Kyra Lester",
      Phone: "08032323212",
      Email: "aiyk.ekwe@gmail.com",
      Role: "System Admin",
    },
    {
      ID: "34122A17-401F-9633-BF81-4CADA6FD5C79",
      Name: "Joel Ebuka",
      Phone: "08032323212",
      Email: "joel.ebuka@gmail.com",
      Role: "System Admin",
    },
    {
      ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
      Name: "Danlami Mali",
      Phone: "08032323212",
      Email: "danlami.mali@gmail.com",
      Role: "Rider",
    },
    {
      ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
      Name: "Danlami Mali",
      Phone: "08032323212",
      Email: "danlami.mali@gmail.com",
      Role: "Rider",
    },
    {
      ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
      Name: "Danlami Mali",
      Phone: "08032323212",
      Email: "danlami.mali@gmail.com",
      Role: "Rider",
    },
    {
      ID: "3471DA17-4GGF-9633-BF81-4CADA6FD5C79",
      Name: "Danlami Mali",
      Phone: "08032323212",
      Email: "danlami.mali@gmail.com",
      Role: "Rider",
    },
    {
      ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
      Name: "Sandra Emeka",
      Phone: "08032323212",
      Email: "sandra.emeka@gmail.com",
      Role: "Point Of Sale",
    }
  ],
  loading: false,
  usermenu: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    // case GET_USERS:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //     loading: false
    //   };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
