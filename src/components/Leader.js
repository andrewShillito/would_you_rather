import React, { Component } from "react";
import { connect } from "react-redux";

class Leader extends Component {
    render() {
        const { answers, questions } = this.props.user;
        return (
          <div className="leader">
              <h3>Answered Questions <span>{Object.keys(answers).length}</span></h3>
              <h3>Created Questions <span>{questions.length}</span></h3>
          </div>
        );
    }
}

function mapStateToProps({ authedUser, users }, {id}) {
    return {
        authedUser,
        user: users[id] !== undefined ? users[id] : null
    };
}

export default connect(mapStateToProps)(Leader);
