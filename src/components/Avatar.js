import React, { Component } from "react";
import { connect } from "react-redux";

// temp hard code

class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <img src={this.props.avatarURL} alt="avatar" />
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        avatarURL: authedUser !== null ? users[authedUser].avatarURL : "" 
    };
}

export default connect(mapStateToProps)(Avatar);