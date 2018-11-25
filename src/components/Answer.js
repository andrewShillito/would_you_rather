import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";

class Answer extends Component {
    render() {
        
        const { question, answer } = this.props;
        
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const totalNumVotes = optionOneVotes + optionTwoVotes;
        
        return (
            <div>
                <div>
                    <h3>{`Asked by ${question.author}`}</h3>
                </div>
                <div>
                    <Avatar user={question.author}/>
                </div>
                <div>
                    <h1>Results:</h1>
                    
                    <div className={answer === "optionOne" ? "answer-selected" : ""}>
                        <h3>{`Would you rather ${question.optionOne.text}?`}</h3>
                        <div className="progress-bar">
                            <div className="progress-bar-inner"></div>
                        </div>
                        <p>{`${optionOneVotes} out of ${totalNumVotes} votes`}</p>
                    </div>
                    
                    <div className={answer === "optionTwo" ? "answer-selected" : ""}>
                        <h3>{`Would you rather ${question.optionTwo.text}?`}</h3>
                        <div className="progress-bar">
                            <div className="progress-bar-inner"></div>
                        </div>
                        <p>{`${optionTwoVotes} out of ${totalNumVotes} votes`}</p>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions, users }, {qid}) {
    return {
        question: questions[qid],
        answer: users[authedUser].answers[qid],
    };
}

export default connect(mapStateToProps)(Answer);