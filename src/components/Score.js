import React, { Component } from "react";

export default function Score(props) {
    return (
        <div className="score-container">
            <div className="score-title">
                <h3>Score</h3>
            </div>
            <div className="score">
                <div>{props.score}</div>
            </div>
        </div>
    )
}
