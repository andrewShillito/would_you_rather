import React, { Component } from "react";
import { connect } from "react-redux";
import handleCreateQuestion from "../actions/questions"

class New extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleCreateQuestion({
            author: this.props.authedUser,
            optionOne: this.state.optionOne,
            optionTwo: this.state.optionTwo,
        }));
        this.props.history.push("/"); //need to add router
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
            <div>
                <h3>Complete the questions</h3>
                <h2>Would you rather...</h2>
                <form id="new-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="optionOne" placeholder="Option One" onChange={this.handleChange} />
                    <input type="text" name="optionTwo" placeholder="Option Two" onChange={this.handleChange} />
                </form>
                <button type="submit" form="new-form"></button>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default connect()(New);