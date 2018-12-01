import React, { Component } from "react";

// todo: allow users to click either on userCard or on Avatar 
// to navigate to user page for that user

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
