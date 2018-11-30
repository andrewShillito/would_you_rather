import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import Score from "./Score";

class Leader extends Component {
    render() {
        console.log("Leader props:", this.props);
        const { name, answers, questions, id } = this.props.user;
        return (
            <div>
                <div>
                    <h1>{name}</h1>
                    <p>Answered Questions <span>{Object.keys(answers).length}</span></p>
                    <p>Created Questions <span>{questions.length}</span></p>
                </div>
                <Score 
                    score={Object.keys(answers).length + questions.length}
                />
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }, {id}) {
    return {
        authedUser,
        user: users[id] !== undefined ? users[id] : null
    };
}

export default connect(mapStateToProps)(Leader);