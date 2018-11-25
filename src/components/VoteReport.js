import React, { Component } from "react";

class VoteReport extends Component {
    render() {
        return (
            <div className={this.props.selected ? "answer-selected" : ""}>
                <h3>{this.props.text}</h3>
                <div className="progress-bar">
                    <div className="progress-bar-inner"></div>
                </div>
                <p>{`${this.props.numVotes} out of ${this.props.totalVotes} votes`}</p>
            </div>
        );
    }
}

export default VoteReport;