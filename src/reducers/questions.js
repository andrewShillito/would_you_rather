import { RECEIVE_QUESTIONS, ANSWER_QUESTION, CREATE_QUESTION } from "../actions/questions";

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
        case CREATE_QUESTION :
            return {
                ...store,
                [action.question.id]: action.question,
            };
        default:
            return store;
    }
}