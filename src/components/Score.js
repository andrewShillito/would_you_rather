import React from "react";

export default function Score(props) {
    return (
          <div className="score">
              <h3 className="score-title">Score</h3>
              <div className="score-display">
                {props.score}
              </div>
          </div>
    )
}
