import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authedUser";

//todo: remove users route and allow users to be viewed by clicking on their user-card - implement in user-card component
//todo: fix avatar rendering in nav

class Nav extends Component {
    handleClick = (e) => {
        const { loggedIn } = this.props;
        if (!loggedIn){
            e.preventDefault();
            alert("Please login to access app features.");
        }
    }
    handleLogout = () => {
        this.props.dispatch(logout());
    }
    render() {
        console.log("Nav Props:", this.props);
        return (
            <nav className="nav">
                <div className="nav-menu">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/questions/new" onClick={this.handleClick}>
                                New Question
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/leaderboard" onClick={this.handleClick}>
                                LeaderBoard
                            </NavLink>
                        </li>
                        {!this.props.loggedIn
                            ? null
                            :
                            <li className="nav-item">
                                <NavLink to="/" onClick={this.handleLogout}>
                                    Logout
                                </NavLink>
                            </li>
                        }
                        {this.props.loggedIn
                            ? <li className="welcome-msg">
                                <NavLink to="/" onClick={this.handleClick}>
                                    {`Hello, ${this.props.username}`}
                                </NavLink>
                              </li>
                            : null
                        }
                        {this.props.loggedIn 
                            ? <li className="nav-avatar-container">
                                <img src={this.props.avatarURL} alt="avatar" className="nav-avatar" />
                              </li>
                            : null
                        }
                    </ul>
                </div>
                
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }){
  // console.log("Nav prop map:", users[authedUser] ? users[authedUser].avatarURL : users[authedUser])
  return {
    username: users[authedUser] !== undefined ? users[authedUser].name : "undefined",
    avatarURL: authedUser !== null ? users[authedUser].avatarURL : "null",
  };
}

export default connect(mapStateToProps)(Nav);
