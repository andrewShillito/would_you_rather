import React, { Component } from "react";

// temp hard code
const avatarUrl = "https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg";

class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <img src={avatarUrl} alt="avatar" />
            </div>
        );
    }
}

export default Avatar;