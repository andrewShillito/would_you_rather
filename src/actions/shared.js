import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";
import { startLoading, endLoading } from "./loading";

export function handleInitialData() {
    return dispatch => {
        // todo: implement loading bar
        dispatch(startLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(endLoading());
            });
    };
}