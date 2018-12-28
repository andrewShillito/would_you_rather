import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authedUser";

class Login extends Component {
    state = {
        value: '',
        selected: "login",
        username: "",
        password: "",
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(login(this.state.value));
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            value,
        }));
    }
    handleClick = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            selected: value,
        }));
    }
    handleCreateUser = () => {
        
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
                            <button value="signup" disabled={this.state.selected==="signup"} onClick={this.handleClick}>Sign Up</button>
                        </div>
                        { this.state.selected === "login"
                            ? <div className="login-form-container">
                                <h3>Select a User and Sign In</h3>
                                <form onSubmit={this.handleLogin} id="login-form">
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
                            : <div className="signup-container">
                                <h3>Create a username and password</h3>
                                <form onSubmit={this.createUser} id="signup-form">
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                    <input type="password" name="confirm-password" value={this.state.confirmPassword} onChange={this.handleChange} />
                                </form>
                                <button type="submit" form="signup-form" className="signup-btn">Submit</button> 
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
