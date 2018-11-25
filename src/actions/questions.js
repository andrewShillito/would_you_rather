import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function answerQuestion(payload) {
    return {
        type: ANSWER_QUESTION,
        payload,
    };
} 

export function handleAnswerQuestion(payload) {
    return dispatch => {
        saveQuestionAnswer(payload) // func accepts { authedUser, qid, answer }
            .then(() => {
                dispatch(answerQuestion(payload));
            })
            .catch(err => {
                console.log(err);
            });
    };
}