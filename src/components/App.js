import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";

import LeaderBoard from "./LeaderBoard";

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
              <LeaderBoard />
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
