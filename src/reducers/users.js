import { RECEIVE_USERS } from "../actions/users";

export default function users(store = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...store,
                ...action.users,
            };
        default:
            return store;
    }
}