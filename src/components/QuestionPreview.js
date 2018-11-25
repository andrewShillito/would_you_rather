import React, { Component } from "react";

class QuestionPreview extends Component {
    render() {
        
        console.log("Q Preview Props:", this.props);
        
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default QuestionPreview