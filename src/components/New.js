import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions/questions";
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
    verifyInput = () => { //returns true if valid, false if invalid
        return (
            (this.state.optionOne !== '' && this.state.optionTwo !== "") &&
            (this.state.optionOne.length <= 40 && this.state.optionTwo.length <= 40)
        );
    }
    render() {
        return (
            <div className="new">
                <h2>Would you rather...</h2>
                <form id="new-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="optionOne" placeholder="Option One" onChange={this.handleChange} />
                    <input type="text" name="optionTwo" placeholder="Option Two" onChange={this.handleChange} />
                </form>
                <button type="submit" form="new-form" disabled={!this.verifyInput()}>Submit</button>
                {!this.verifyInput()
                    ? <span className="input-warning">
                        {this.state.optionOne === '' || this.state.optionTwo === ''
                            ? "Must complete both options"
                            : this.state.optionOne.length > 40 ? `Option One must be 40 characters or less` : `Option Two must be 40 characters or less`
                        }        
                    </span>
                    : <span className="input-success">Ready to Submit</span>
                }
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default withRouter(connect(mapStateToProps)(New));
