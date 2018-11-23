import { LOG_IN_USER, LOG_OUT_USER } from "../actions/authedUser";

export default function authedUser(store = null, action) {
    switch(action.type) {
        case LOG_IN_USER:
            return action.authedUser;
        case LOG_OUT_USER:
            return null;
        default:
            return store;
    }
}