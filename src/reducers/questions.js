import { RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(store = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...store,
                ...action.questions,
            };
        default:
            return store;
    }
}