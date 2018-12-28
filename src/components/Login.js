import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authedUser";

class Login extends Component {
    state = {
        value: '',
        selected: "login"
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(login(this.state.value));
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            value,
        }));
    }
    render() {
        // todo: change to use a select box built of divs/a tags so can have user avatars included
        return (

            <div className="login">
                { this.props.users.length
                    ? (
                    <Fragment>
                        <div className="login-nav">
                            <button value="login" disabled={this.state.selected==="login"} onClick={this.handleClick}>Login</button>
                            <button value="sign up" disabled={this.state.selected==="sign up"} onClick={this.handleClick}>Sign Up</button>
                        </div>
                        <div className="login-form-container">
                            <h3>Select a User and Sign In</h3>
                            <form onSubmit={this.handleSubmit} id="login-form">
                                <select value={this.state.value} onChange={this.handleChange}>
                                        <option key="userPrompt" disabled></option>
                                    { this.props.users.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                            </form>
                            <button
                                type="submit"
                                form="login-form"
                                disabled={!this.state.value.length}
                                >Sign In
                            </button>
                          </div>
                      <div className="signup-container">
                        <h3>Select a username and password</h3>
                        <form onSubmit={this.createUser} id="signup-form">
                            
                        </form>
                      </div>
                    </Fragment>
                      )
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map(user => ({
            id: users[user].id,
            avatarURL: users[user].avatarURL,
            name: users[user].name,
        })),
    };
}

export default connect(mapStateToProps)(Login);
