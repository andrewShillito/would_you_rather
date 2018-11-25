import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionPreview from "./QuestionPreview";

class QuestionList extends Component {
    render() {
        const { user, answered, unanswered, users } = this.props;
        
        return (
            <div>
                {answered.map((question) => {
                    return (
                        <QuestionPreview 
                            author={question.author}
                            name={users[question.author].name}
                            avatarURL={users[question.author].avatarURL}
                            text={question.optionOne.text}
                            id={question.id}
                            key={question.id}
                        />
                    );
                })}
                {unanswered.map((question) => {
                    return (
                        <QuestionPreview 
                            author={question.author}
                            name={users[question.author].name}
                            avatarURL={users[question.author].avatarURL}
                            text={question.optionOne.text}
                            id={question.id}
                            key={question.id}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    
    const user = users[authedUser];
    const answered = Object.keys(user.answers).map((qid) => questions[qid]);
    const unanswered = Object.keys(questions).filter((question) => !(question in user.answers))
            .map((qid) => questions[qid]);
    
    return {
        user,
        answered,
        unanswered,
        users,
    };
}

export default connect(mapStateToProps)(QuestionList);