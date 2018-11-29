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
            // need to update questions
            return {
                ...store,
                [action.question.id]: action.question,
                //I think this is right, i think I don't need to spread it
            };
        default:
            return store;
    }
}