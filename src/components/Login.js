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
                                <option key={user.id}>
                                    <span>
                                        <img src={user.avatarURL} alt=""/>
                                    </span>
                                    {user.name}
                                </option>
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
        users: Object.keys(users).map(user => ({
            id: users[user].id,
            avatarURL: users[user].avatarURL,
            name: users[user].name
        }))
    };
}

export default connect(mapStateToProps)(Login);