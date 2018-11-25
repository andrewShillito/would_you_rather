import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ANSWER_QUESTION } from "../actions/questions";

export default function questions(store = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...store,
                ...action.questions,
            };
        case ANSWER_QUESTION:
            const { qid, answer, authedUser } = action.payload;
            return {
                ...store,
                [qid]: {
                    ...store[qid],
                    [answer]: {
                        ...store[qid][answer],
                        votes: store[qid][answer].votes.concat([authedUser])
                    }
                }
            };
        default:
            return store;
    }
}