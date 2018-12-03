import React from "react";
import { Link } from "react-router-dom";

export default function QuestionPreview(props) {
    return (
        <div className="question-preview">
            <div className="question-preview-text">
                {`${props.text.substring(0, 14)}...`}
            </div>
            <Link to={`/questions/${props.id}`} className="question-preview-btn">
                View
            </Link>
        </div>
    );
}
