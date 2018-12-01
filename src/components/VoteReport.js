import React, { Component } from "react";

class VoteReport extends Component {
    render() {

        const percent = (this.props.numVotes/this.props.totalVotes)*100;

        return (
            <div className={this.props.selected ? "vote-report selected" : "vote-report"}>
                <h3>{this.props.text}</h3>
                <div className="progress-bar">
                    <div className="progress-bar-inner" width={`${percent}%`}></div>
                </div>
                <p>{`${this.props.numVotes} out of ${this.props.totalVotes} votes`}</p>
            </div>
        );
    }
}

// todo: make into a stateless functional component

export default VoteReport;
