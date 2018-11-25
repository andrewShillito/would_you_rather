import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";

import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import Answer from "./Answer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        { this.props.authedUser !== null 
          ? (<div>
              <h1>Hello {this.props.authedUser}, {this.props.name}</h1>
              <hr />
              <LeaderBoard />
              <hr />
              <Question qid="6ni6ok3ym7mf1p33lnez"/>
              <hr />
              <Answer qid="6ni6ok3ym7mf1p33lnez" />
            </div>)
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    name: authedUser !== null ? users[authedUser].name : null,
    // todo: implement loading functionality
  };
}

export default connect(mapStateToProps)(App);

//todo: question component will be passed question id by router (maybe with router)