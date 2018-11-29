import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

class QuestionPreview extends Component {
    render() {
        // console.log("Preview Props: ", this.props);
        
        return (
            <div>
                <div>
                    {`Asked by: ${this.props.name}`}
                </div>
                <div>
                    <Avatar user={this.props.author}/>
                </div>
                <div>
                    {`${this.props.text.substring(0, 14)}...`}
                </div>
                <Link to={`/questions/${this.props.id}`}>
                    Question
                </Link>
            </div>
        );
    }
}

export default QuestionPreview;