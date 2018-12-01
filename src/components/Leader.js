import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import Score from "./Score";

class Leader extends Component {
    render() {
        const { name, answers, questions, id } = this.props.user;
        return (
          <div className="leader">
              <p>Answered Questions <span>{Object.keys(answers).length}</span></p>
              <p>Created Questions <span>{questions.length}</span></p>
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
