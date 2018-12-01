import React from "react";
import { connect } from "react-redux";

function NavAvatar(props) {
    return (
      <div className="nav-avatar">
          <h3>{`Hello ${props.username}`}</h3>
          <img src={props.avatarURL} alt="avatar" />
      </div>
    );
}

function mapStateToProps({ authedUser, users}) {
  return {
    username: users[authedUser] !== undefined ? users[authedUser].name : "undefined",
    avatarUrl: authedUser !== null ? users[authedUser].avatarURL : "null",
  }
}

export default connect(mapStateToProps)(NavAvatar);
