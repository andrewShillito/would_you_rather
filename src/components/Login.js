import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authedUser";

class Login extends Component {
    state = {
        value: '',
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
            
            <div>
                { this.props.users.length 
                    ? (<div>
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