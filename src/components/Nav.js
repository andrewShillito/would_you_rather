import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
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
        
        const pathname = this.props.location.pathname;

        return (
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/questions/new" onClick={this.handleClick} id={pathname === "/questions/new" ? "nav-active" : ""}>
                            New Question
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/leaderboard" onClick={this.handleClick} id={pathname === "/leaderboard" ? "nav-active" : ""}>
                            LeaderBoard
                        </NavLink>
                    </li>
                    {this.props.loggedIn 
                        ? <li className="nav-item">
                            <NavLink to="/" onClick={this.handleLogout}>
                                Logout
                            </NavLink>
                        </li>
                        : null
                    }
                </ul>
                {this.props.loggedIn
                    ? <ul className="nav-avatar-container">
                        <li className="nav-item welcome-msg">
                            <NavLink to="/" onClick={this.handleClick} id={pathname === "/" ? "nav-active" : ""}>
                                {`Hello, ${this.props.username}`}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={this.handleClick}>
                                <img src={this.props.avatarURL} alt="avatar" className="nav-avatar" />
                            </NavLink>
                        </li>
                    </ul>
                    : null
                }
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

export default withRouter(connect(mapStateToProps)(Nav));
