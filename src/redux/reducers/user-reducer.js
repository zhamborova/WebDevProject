import img4 from "../../assets/Ellipse 4.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";
import {CREATE_USER, DELETE_USER, UPDATE_USER, GET_USER, GET_ALL_USER} from "../actions/user-actions";

const users = [
    { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [345, 234, 456,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},
    { id:234,first_name: "Bryan", last_name: "Young",  img: img2,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [123,345, 456,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},
    { id:345, first_name: "Tom", last_name: "Holmes", img: img3,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [123, 234, 456,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},

    { id:456, first_name: "Tom", last_name: "Holmes", img: img3,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [123,345, 234,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},

    { id:567, first_name: "Tom", last_name: "Holmes", img: img3,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [345, 234, 456,567,678, 123],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},
    { id:678, first_name: "Tom", last_name: "Holmes", img: img3,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [345, 234, 456,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"},
    { id:789, first_name: "Tom", last_name: "Holmes", img: img3,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [345, 234, 456,567,678],
        events: [1,2,3,4,5],
        email: "efe@gmail.com"}

]


let init = {
    user: users[0],
    users: users,
    current_user: null,
}


export const user_reducer = (state=init, action) => {

    switch (action.type) {

        case CREATE_USER:
            return {...state,
                users: [...state.users, action.user]};
        case UPDATE_USER:
            return {...state,
                users: state.users.map(user => user.id === action.user.id ? action.user : user)
            };
        case DELETE_USER:
            return {...state,
                users: state.users.filter(user => user.id !== action.id)};
        case GET_USER:
            return {...state,
                user: action.user,
                userId: action.userId
            };
        case GET_ALL_USER:
            return {...state,
                users: action.users
            };
        case "SET_CURRENT_USER":
          console.log(action)
            return {
                ...state,
                current_user: action.current_user
            }

        default: return state;

    }
}

export default user_reducer
