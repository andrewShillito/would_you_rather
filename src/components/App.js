import React, { Component } from 'react';
import Avatar from "./avatar";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Avatar />
      </div>
    );
  }
}

export default connect()(App);
