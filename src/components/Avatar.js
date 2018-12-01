import React from "react";
import { connect } from "react-redux";

function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.avatarURL} alt="avatar" />
        </div>
    );
}

function mapStateToProps({ users }, {user}) {
    return {
        avatarURL: user !== null ? users[user].avatarURL : "",
    };
}

export default connect(mapStateToProps)(Avatar);
