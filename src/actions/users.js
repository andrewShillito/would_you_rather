import { saveUser } from "../utils/api";
import { startLoading, endLoading } from "./loading";
import { login } from "./authedUser";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_USER = "CREATE_USER";

export function receiveUsers(users) {
    return {
       type: RECEIVE_USERS,
       users,
    };
}

export function handleCreateUser(user) {
    return dispatch => {
        dispatch(startLoading());
        
        saveUser(user)
        .then((formattedUser) => {
            dispatch(createUser(formattedUser));
            return formattedUser;
        })
        .then((formattedUser) => dispatch(login(formattedUser.id)))
        .then(() => dispatch(endLoading()))
        .catch(err => {
            console.log("Error:", err);
        });
    };
}

export function createUser(user) {
    return {
        type: CREATE_USER,
        user,
    };
}