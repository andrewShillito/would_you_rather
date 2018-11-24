import React, { Component } from 'react';
import Avatar from "./Avatar";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";

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
              <Avatar />
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
