import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import { handleAnswerQuestion } from "../actions/questions";
import Title from "./Title";

class Question extends Component {
    state = {
        selected: "optionOne",
    }
    handleChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({
            selected: val,
        }));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const answer = this.state.selected;
        this.props.dispatch(handleAnswerQuestion({
            answer,
            authedUser: this.props.authedUser,
            qid: this.props.question.id,
        }));
    }
    render() {
        const { authorName, question } = this.props;
        const { author } = question;

        return (
          <div className="question">
              <h1 className="question-title">Would You Rather ...</h1>
              <div className="question-form-container">
                  <form id="question-form" onSubmit={this.handleSubmit}>
                      <input type="radio" name="answer" id="optionOne" value="optionOne"
                          onChange={this.handleChange} checked={this.state.selected === "optionOne"}
                      ></input>
                      <label htmlFor="optionOne">{question.optionOne.text}</label>
                      <input type="radio" name="answer" id="optionTwo" value="optionTwo"
                          onChange={this.handleChange} checked={this.state.selected === "optionTwo"}
                      ></input>
                      <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                  </form>
                  <button type="submit" form="question-form">Submit</button>
              </div>
          </div>
        );
    }
}

function mapStateToProps({ questions, authedUser, users }, { qid }) {
    return {
        question: questions[qid],
        authedUser,
        authorName: users[questions[qid].author].name,
    };
}

export default connect(mapStateToProps)(Question);
