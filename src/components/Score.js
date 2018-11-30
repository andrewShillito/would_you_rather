import React, { Component } from "react";

export default function Score(props) {
    return (
        <div>
            <div>
                <h3>Score</h3>
            </div>
            <div>
                <div>{props.score}</div>
            </div>
        </div>    
    )
}