import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function QuestionPreview(props) {
    return (
        <div>
            <div>
                {`${props.text.substring(0, 14)}...`}
            </div>
            <Link to={`/questions/${props.id}`}>
                Question
            </Link>
        </div>
    );
}
