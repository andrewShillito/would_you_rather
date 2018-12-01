import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionPreview from "./QuestionPreview";
import UserCard from "./UserCard";
import Title from "./Title";
import Avatar from "./Avatar";

class QuestionList extends Component {
    state = {
        selected: 'answered',
    }
    handleClick = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            selected: value,
        }));
    }
    render() {
        const { answered, unanswered, users } = this.props;
        const questionList = this.state.selected === "answered"
            ? <div>
                {answered.map((question) => {
                    return (
                        <UserCard key={question.id}>
                          <Title title={`Asked by: ${users[question.author].name}`} />
                          <Avatar user={question.author} />
                          <QuestionPreview
                              text={question.optionOne.text}
                              id={question.id}
                          />
                        </UserCard>
                    );
                })}
                </div>
            : <div>
                {unanswered.map((question) => {
                    return (
                      <UserCard key={question.id}>
                        <Title title={`Asked by: ${users[question.author].name}`} />
                        <Avatar user={question.author} />
                        <QuestionPreview
                            text={question.optionOne.text}
                            id={question.id}
                        />
                      </UserCard>
                    );
                })}
            </div>;
        return (
            <div>
                <div>
                    <button value="answered" disabled={this.state.selected==="answered"} onClick={this.handleClick}>Answered</button>
                    <button value="unanswered" disabled={this.state.selected!=="answered"} onClick={this.handleClick}>Unanswered</button>
                </div>
                {questionList}
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
        answered,
        unanswered,
        users,
    };
}

export default connect(mapStateToProps)(QuestionList);