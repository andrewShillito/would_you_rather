import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";

import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import Answer from "./Answer";
import QuestionList from "./QuestionList";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      
      <Router>
        <div>
          <Nav />
          { this.props.authedUser !== null 
          ? <div>
              <Route path="/" exact component={QuestionList}/>
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:qid" render={props => <Question qid={props.match.params.qid}/> } />
            </div>
          : <Route path="/" exact component={Login} />
        }
      </div>
  </Router>
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