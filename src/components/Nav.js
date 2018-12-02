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
        // console.log("Nav Props:", this.props)
        return (
            <nav className="nav">
                <ul>
                    {this.props.loggedIn
                      ? <li className="nav-item">
                          <NavLink to="/" exact activeClassName="active" onClick={this.handleClick}>
                            {`Hello, ${this.props.username}`}
                            <img className="nav-avatar" src={this.props.avatarURL} alt="avatar"/>
                          </NavLink>
                        </li>
                      : null
                    }
                    <li className="nav-item">
                        <NavLink to="/questions/new" activeClassName="active" onClick={this.handleClick}>
                            New Question
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/leaderboard" activeClassName="active" onClick={this.handleClick}>
                            LeaderBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/questions`} className="nav-item" activeClassName="active" onClick={this.handleClick}>
                            Questions
                        </NavLink>
                    </li>
                    {!this.props.loggedIn
                        ? null
                        :
                        <li>
                            <NavLink to="/" className="nav-item" activeClassName="active" onClick={this.handleLogout}>
                                Logout
                            </NavLink>
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }){
  // console.log("Nav prop map:", users[authedUser] ? users[authedUser].avatarURL : users[authedUser])
  return {
    username: users[authedUser] !== undefined ? users[authedUser].name : "undefined",
    avatarUrl: authedUser !== null ? users[authedUser].avatarURL : "null",
  }
}

export default connect(mapStateToProps)(Nav);
