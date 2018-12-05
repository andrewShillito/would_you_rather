import React from "react";

export default function Score(props) {
    return (
          <div className="score">
              <h3 className="score-title">Score</h3>
              <h3 className="score-display">
                {props.score}
              </h3>
          </div>
    );
}
