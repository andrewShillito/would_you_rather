import { RECEIVE_USERS } from "../actions/users";
import { ANSWER_QUESTION } from "../actions/questions";

export default function users(store = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...store,
                ...action.users,
            };
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.payload;
            return {
                ...store,
                [authedUser]: {
                    ...store[authedUser],
                    answers: {
                        ...store[authedUser].answers,
                        [qid]: answer,
                    }
                }
            };
        default:
            return store;
    }
}