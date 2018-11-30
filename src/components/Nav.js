import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authedUser";

//todo: remove users route and allow users to be viewed by clicking on their user-card - implement in user-card component

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
        return (
            <nav className="nav">
                <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active" onClick={this.handleClick}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/questions/new" activeClassName="active" onClick={this.handleClick}>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" activeClassName="active" onClick={this.handleClick}>
                        LeaderBoard
                    </NavLink>
                </li>
                {!this.props.loggedIn
                    ? null
                    : 
                    <li>
                        <NavLink to="/" activeClassName="active" onClick={this.handleLogout}>
                            Logout
                        </NavLink>
                    </li>
                }
                <li>
                    <NavLink to={`/questions`} activeClassName="active" onClick={this.handleClick}>
                        Questions
                    </NavLink>
                </li>
                </ul>
            </nav> 
        );
    }
}

export default connect()(Nav);