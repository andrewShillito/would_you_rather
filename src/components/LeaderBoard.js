import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader";
import UserCard from "./UserCard";
import Avatar from "./Avatar";

class LeaderBoard extends Component {
    render() {
        const { leaders } = this.props;
        return (
            <div className="leader-board">
                {leaders.map((leader) => (
                    <UserCard key={leader.id} >
                        <Avatar user={leader.id} />
                        <Leader id={leader.id} />
                    </UserCard>
                ))}
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    // create sorted list of user objects by score highest to lowest
    // limit leaderboard to 10 total users
    const leaders = Object.keys(users).sort((a, b) => {
        return (
            (Object.keys(users[b].answers).length + users[b].questions.length) //total score of user b
          - (Object.keys(users[a].answers).length + users[a].questions.length) //total score of user a
        );
    }).slice(0, 10).map((id) => users[id]); 
    return {
        leaders,
    };
}

export default connect(mapStateToProps)(LeaderBoard);