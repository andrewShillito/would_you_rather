import { combineReducers } from "redux";
import questions from './questions';
import users from "./users";
import authedUser from "./authedUser";
import loading from "./loading";

export default combineReducers({
    users,
    questions,
    authedUser,
    loading,
});