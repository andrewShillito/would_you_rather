import React, { Component } from "react";

class UserCard extends Component {
    render() {
        return (
            <div className="user-card">
                {this.props.children}
            </div>
        );
    }
}


export default UserCard;
