import { RECEIVE_USERS, CREATE_USER } from "../actions/users";
import { ANSWER_QUESTION, CREATE_QUESTION } from "../actions/questions";

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
        case CREATE_QUESTION:
            // need to update author user's questions
            const author = action.question.author;
            const id = action.question.id;
            // console.log("author:", author, "\n", "Q-id:", id);
            return {
                ...store,
                [author]: {
                    ...store[author],
                    questions: store[author].questions.concat([id]),
                }
            };
        case CREATE_USER:
            return {
                ...store,
                [action.user.id]: action.user,
            };
        default:
            return store;
    }
}