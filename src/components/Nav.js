import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    handleClick = (e) => {
        const { loggedIn } = this.props;
        if (!loggedIn){
            e.preventDefault();
            alert("Please login to access app features.");
        }
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
                    <NavLink to="/new" activeClassName="active" onClick={this.handleClick}>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" activeClassName="active" onClick={this.handleClick}>
                        LeaderBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout" activeClassName="active" onClick={this.handleClick}>
                        Logout
                    </NavLink>
                </li>
                </ul>
            </nav> 
        );
    }
}

export default Nav;