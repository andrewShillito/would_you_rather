import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";

import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import Answer from "./Answer";
import QuestionList from "./QuestionList";
import New from "./New";

import UserCard from "./UserCard";
import Leader from "./Leader";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      
      <Router>
        <div>
          <Nav loggedIn={this.props.authedUser !== null} authedUser={this.props.authedUser}/>
          { this.props.authedUser !== null 
          ? <div>
              <Switch>
                <Route path="/" exact render={props => (
                  <Redirect to="/questions" />
                )}
                  
                />
                <Route path="/questions" exact component={QuestionList}/>
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/new" component={New} />
                <Route path="/questions/:qid" render={props => {
                  const qid = props.match.params.qid;
                  return ( this.props.questions[qid].optionOne.votes.includes(this.props.authedUser) ||
                  this.props.questions[qid].optionTwo.votes.includes(this.props.authedUser) ) 
                  ? <Answer qid={qid} />
                  : <Question qid={qid}/>;
                }} />
                <Route path="/users/:id" render={props => {
                  console.log("Route props: ", props.match.params.id);
                  return (
                    <UserCard>
                      <Leader id={props.match.params.id} key={props.match.params.id} />
                    </UserCard>
                  );
                }} />
              </Switch>
            </div>
          : <Route path="/" component={Login} />
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