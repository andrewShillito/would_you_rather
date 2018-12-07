import React, { Component } from "react";

class VoteReport extends Component {
    render() {

        const percent = Math.round((this.props.numVotes/this.props.totalVotes)*100);
        const width = percent ? `${percent}%` : '0%';
        
        const innerStyle = {
            width,
            height: "100%",
            backgroundColor: "#439ef9",
        }

        return (
            <div className={this.props.selected ? "vote-report selected" : "vote-report"}>
                <h3>{this.props.text}
                    {this.props.selected
                        ? <i className="far fa-check-circle"/>
                        : null
                    }
                </h3>
                <div className="progress-bar">
                    {percent
                        ?  <div className="progress-bar-inner" style={innerStyle}>
                                <span className="progress-bar-text">{`${percent}%`}</span>
                            </div>
                        : <span>{`${percent}%`}</span>
                    }
                </div>
                <p>{`${this.props.numVotes} out of ${this.props.totalVotes} votes`}</p>
            </div>
        );
    }
}

// todo: make into a stateless functional component

export default VoteReport;
