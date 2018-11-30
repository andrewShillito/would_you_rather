import React, { Component } from "react";

class UserCard extends Component {
    render() {
        console.log("UserCard children:", this.props.children);
        return (
            <div className="user-card">
                {this.props.children}
            </div>
        );
    }
}


export default UserCard;