import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";

class Leader extends Component {
    render() {
        
        const { name, answers, questions, id } = this.props.user;
        return (
            <div>
                <div>
                    <Avatar user={id}/>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>Answered Questions <span>{Object.keys(answers).length}</span></p>
                    <p>Created Questions <span>{questions.length}</span></p>
                </div>
                <div>
                    <div>
                        <h3>Score</h3>
                    </div>
                    <div>
                        <div>{Object.keys(answers).length + questions.length}</div>
                    </div>
                </div>
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