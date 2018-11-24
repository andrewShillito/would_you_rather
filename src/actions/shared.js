import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";
import { logInUser } from "./authedUser"

function selectAuthedId () {
    const users = ["sarahedo", "tylermcginnis", "johndoe"];
    return users[Math.floor(Math.random()*3)];
}

const AUTHED_ID = selectAuthedId();


export function handleInitialData() {
    return dispatch => {
        // todo: implement loading bar
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(logInUser(AUTHED_ID));
            });
    };
}