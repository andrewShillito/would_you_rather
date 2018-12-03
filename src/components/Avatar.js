import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Avatar extends Component {
    handleClick = () => {
        this.props.history.push(`/users/${this.props.id}`);
    }
    render() {
        return (
            <div className="avatar" onClick={this.handleClick}>
                <img src={this.props.avatarURL} alt="avatar" />
            </div>
        );    
    }
}

function mapStateToProps({ users }, {user}) {
    return {
        avatarURL: user !== null ? users[user].avatarURL : "",
        id: user !== null ? user : null,
    };
}

export default withRouter(connect(mapStateToProps)(Avatar));
