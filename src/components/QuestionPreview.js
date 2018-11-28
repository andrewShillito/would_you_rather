import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionPreview extends Component {
    render() {
        return (
            <div>
                {this.props.text}
                <Link to={`/questions/${this.props.id}`}>
                    Question
                </Link>
            </div>
        )
    }
}

export default QuestionPreview