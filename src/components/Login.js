import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authedUser";
import { handleCreateUser } from "../actions/users";

class Login extends Component {
    state = {
        value: '',
        selected: "login",
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        warningMessage: "All fields are required",
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(login(this.state.value));
    }
    handleSelect = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            value,
        }));
    }
    handleChange = e => {
        const value = e.target.value;
        const name = e.target.getAttribute("name");
        this.setState(() => ({
            [name]:value,
        }), this.validateInput);
    }
    handleClick = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            selected: value,
        }));
    }
    handleSignUp = (e) => {
        e.preventDefault();
        this.props.dispatch(handleCreateUser({
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
        }));
    }
    render() {
        // todo: change to use a select box built of divs/a tags so can have user avatars included

        var validInput = false;
        var warningMessage = "All fields are required";
        
        if (this.state.selected === "signup") {
            if (this.state.name && this.state.username && this.state.password && this.state.confirmPassword) {
                if (this.state.password === this.state.confirmPassword) {
                    validInput = true;
                }
                else {
                    warningMessage = "Passwords must match";
                }
            }
        }
        
        return (
            <div className="login">
                { this.props.users.length
                    ? (
                    <Fragment>
                        <div className="login-nav">
                            <button value="login" disabled={this.state.selected==="login"} onClick={this.handleClick}>Login</button>
                            <button value="signup" disabled={this.state.selected==="signup"} onClick={this.handleClick}>Sign Up</button>
                        </div>
                        { this.state.selected === "login"
                            ? <div className="login-form-container">
                                <h3>Select a User and Sign In</h3>
                                <form onSubmit={this.handleLogin} id="login-form">
                                    <select value={this.state.value} onChange={this.handleSelect}>
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
                            : <div className="signup-container">
                                <h3>Create a username and password</h3>
                                <form onSubmit={this.handleSignUp} id="signup-form">
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="confirm password" />
                                </form>
                                <button type="submit" form="signup-form" className="signup-btn" disabled={!validInput}>Submit</button>
                                {validInput
                                    ? <span className="input-success">Ready to Submit</span>
                                    : <span className="input-warning">{warningMessage}</span>
                                }
                              </div>
                        }
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
