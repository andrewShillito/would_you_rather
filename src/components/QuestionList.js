import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionPreview from "./QuestionPreview";
import UserCard from "./UserCard";
import Title from "./Title";
import Avatar from "./Avatar";

class QuestionList extends Component {
    state = {
        selected: 'unanswered',
    }
    handleClick = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            selected: value,
        }));
    }
    render() {
        const { answered, unanswered, users } = this.props;
        return (
            <div className="question-list">
                <div className="question-list-nav">
                    <button value="unanswered" disabled={this.state.selected!=="answered"} onClick={this.handleClick}>Unanswered</button>
                    <button value="answered" disabled={this.state.selected==="answered"} onClick={this.handleClick}>Answered</button>
                </div>
                {this.state.selected === "answered"
                    ? <div className="question-list-cards">
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
                    : <div className="question-list-cards">
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
                    </div>
                  }
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    //get answered and unanswered question arrays for authedUser
    //sort arrays - most recent first
    //send users object also to provide question creator (ask-er) names
    const user = users[authedUser];
    const answered = Object.keys(user.answers).map((qid) => questions[qid]).sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.keys(questions).filter((question) => !(question in user.answers))
            .map((qid) => questions[qid]).sort((a, b) => b.timestamp - a.timestamp);

    return {
        answered,
        unanswered,
        users,
    };
}

export default connect(mapStateToProps)(QuestionList);
