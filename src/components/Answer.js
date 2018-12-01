import React, { Component } from "react";
import { connect } from "react-redux";
import VoteReport from "./VoteReport";

class Answer extends Component {
    render() {

        const { question, answer } = this.props;

        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const totalNumVotes = optionOneVotes + optionTwoVotes;

        return (
          <div className="answer">
              <h1>Results:</h1>
              <VoteReport
                  selected={answer === "optionOne"}
                  text={`Would you rather ${question.optionOne.text}?`}
                  numVotes={optionOneVotes}
                  totalVotes={totalNumVotes}
              />
              <VoteReport
                  selected={answer === "optionTwo"}
                  text={`Would you rather ${question.optionTwo.text}?`}
                  numVotes={optionTwoVotes}
                  totalVotes={totalNumVotes}
              />
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
