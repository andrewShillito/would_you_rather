import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const CREATE_QUESTION = "CREATE_QUESTION";

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

export function createQuestion(question) {
    return {
        type: CREATE_QUESTION,
        question,
    };
}

export function handleCreateQuestion(question) { //question must be object with author, optionOne, and optionTwo properties
    return dispatch => {
        saveQuestion(question)
            .then((newQuestion) => { //receives formatted question as response
                dispatch(createQuestion(newQuestion));
            })
            .catch(err => {
                console.log(err);
            });
    };
}