import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Avatar from "./Avatar";
import Title from "./Title";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (

      <Router>
        <div className="app">
          <Nav loggedIn={this.props.authedUser !== null} authedUser={this.props.authedUser}/>
          { this.props.authedUser !== null
          ? <div className="content">
              <Switch>
                <Route path="/" exact component={QuestionList} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/new" component={New} />
                <Route path="/questions/:qid" render={props => {
                  const qid = props.match.params.qid;
                  return ( this.props.questions[qid].optionOne.votes.includes(this.props.authedUser) ||
                  this.props.questions[qid].optionTwo.votes.includes(this.props.authedUser) )
                  ? <UserCard>
                      <Title title={`Asked by ${this.props.users[this.props.questions[qid].author].name}`}/>
                      <Avatar user={this.props.questions[qid].author} />
                      <Answer qid={qid} />
                    </UserCard>

                  : <UserCard>
                      <Title title={`${this.props.users[this.props.questions[qid].author].name} asks:`}/>
                      <Avatar user={this.props.questions[qid].author} />
                      <Question qid={qid}/>
                    </UserCard>;
                }} />
                <Route path="/users/:id" render={props => {
                  return (
                    <UserCard>
                      <Title title={this.props.users[props.match.params.id].name}/>
                      <Avatar user={props.match.params.id} />
                      <Leader id={props.match.params.id} />
                    </UserCard>
                  );
                }} />
              </Switch>
            </div>
          : <Login />
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
    users,
    // todo: implement loading functionality
  };
}

export default connect(mapStateToProps)(App);
