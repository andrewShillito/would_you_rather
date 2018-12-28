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
import Avatar from "./Avatar";
import Title from "./Title";
import User from "./User";

import LoadingCircle from "./LoadingCircle";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    
    const { users, questions, authedUser, loading} = this.props;
    
    return (

      <Router>
        <div className="app">
          <Nav loggedIn={authedUser !== null} authedUser={authedUser}/>
          { this.props.authedUser !== null
          ? <div className="content">
              <Switch>
                <Route path="/" exact render={props => loading ? <LoadingCircle /> : <QuestionList />} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/add" render={props => {
                  return (
                    <UserCard>
                      <Title title="Complete the Questions" />
                      <New />
                    </UserCard>
                  );
                }} />
                <Route path="/questions/:qid" render={props => {
                  console.log("question id props:", props);
                  const qid = props.match.params.qid;
                  if (questions[qid] !== undefined) {
                      return (questions[qid].optionOne.votes.includes(authedUser) ||
                      questions[qid].optionTwo.votes.includes(authedUser))
                        ? <UserCard>
                            <Title title={`Asked by ${users[this.props.questions[qid].author].name}`}/>
                            <Avatar user={questions[qid].author} />
                            <Answer qid={qid} />
                          </UserCard>
                        : <UserCard>
                            <Title title={`${users[questions[qid].author].name} asks:`}/>
                            <Avatar user={questions[qid].author} />
                            <Question qid={qid}/>
                          </UserCard>; 
                      }
                  return (<h1>404 question not found</h1>);
                  }} /> 
                <Route path="/users/:id" render={props => {
                  return (
                    <User id={props.match.params.id}/>
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

function mapStateToProps({ authedUser, users, questions, loading }) {
  return {
    authedUser,
    name: authedUser !== null ? users[authedUser].name : null,
    questions,
    users,
    loading,
    // todo: implement loading functionality
  };
}

export default connect(mapStateToProps)(App);
