import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionPreview extends Component {
    render() {
        
        console.log("Q Preview Props:", this.props);
        
        return (
            <div>
                {this.props.text}
                <Link to={`/question/${this.props.id}`}>
                    Question
                </Link>
            </div>
        )
    }
}

export default QuestionPreview