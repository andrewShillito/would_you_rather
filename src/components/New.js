import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions/questions";
import Title from "./Title";
import { withRouter } from "react-router-dom"

class New extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleCreateQuestion({
            author: this.props.authedUser,
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
        }));
        this.props.history.push("/");
    }
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.getAttribute("name");
        this.setState(() => ({
            [name]: value,
        }));
    }
    render() {
        return (
            <div className="new">
                <h2>Would you rather...</h2>
                <form id="new-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="optionOne" placeholder="Option One" onChange={this.handleChange} />
                    <input type="text" name="optionTwo" placeholder="Option Two" onChange={this.handleChange} />
                </form>
                <button type="submit" form="new-form" disabled={!(this.state.optionOne !== '' && this.state.optionTwo !== "")}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default withRouter(connect(mapStateToProps)(New));
