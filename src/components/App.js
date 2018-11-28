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
          <Nav loggedIn={this.props.authedUser !== null}/>
          { this.props.authedUser !== null 
          ? <div>
              <Route path="/" exact component={QuestionList}/>
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:qid" render={props => {
                const qid = props.match.params.qid;
                return ( this.props.questions[qid].optionOne.votes.includes(this.props.authedUser) ||
                this.props.questions[qid].optionTwo.votes.includes(this.props.authedUser) ) 
                ? <Answer qid={qid} />
                : <Question qid={qid}/> 
              }} />
            </div>
          : <Route path="/" exact component={Login} />
        }
      </div>
  </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    name: authedUser !== null ? users[authedUser].name : null,
    questions,
    // todo: implement loading functionality
  };
}

export default connect(mapStateToProps)(App);

//todo: question component will be passed question id by router (maybe with router)