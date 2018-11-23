import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers()
        ])
        .then(([users, questions]) => { //returned list is destructured in function definition
            return {
                users,
                questions,
            };
        });
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
}