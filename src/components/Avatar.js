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

function mapStateToProps({ users }, {user}) {
    return {
        avatarURL: user !== null ? users[user].avatarURL : "" 
    };
}

export default connect(mapStateToProps)(Avatar);