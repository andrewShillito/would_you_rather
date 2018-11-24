import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    render() {
        return (
            <div>
                { this.props.users.length 
                    ? <form>
                        <select>
                            { this.props.users.map(user => (
                                <option key={user}>{user}</option>
                            ))}
                        </select>
                      </form>
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map(user => users[user].id)
    };
}

export default connect(mapStateToProps)(Login);