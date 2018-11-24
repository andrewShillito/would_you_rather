import { LOGIN, LOGOUT } from "../actions/authedUser";

export default function authedUser(store = null, action) {
    switch(action.type) {
        case LOGIN:
            return action.id;
        case LOGOUT:
            return null;
        default:
            return store;
    }
}