import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader";
import UserCard from "./UserCard";
import Avatar from "./Avatar";
import Title from "./Title";
import Score from "./Score";

class LeaderBoard extends Component {
    render() {
        const { leaders, users } = this.props;
        return (
            <div className="leader-board">
                {leaders.map((leader) => (
                    <UserCard key={leader.id} >
                        <Title title={users[leader.id].name} />
                        <Avatar user={leader.id} />
                        <Leader id={leader.id} />
                        <Score score={Object.keys(users[leader.id].answers).length + users[leader.id].questions.length}/>
                    </UserCard>
                ))}
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    // create sorted list of user objects by score highest to lowest
    const leaders = Object.keys(users).sort((a, b) => {
        return (
            (Object.keys(users[b].answers).length + users[b].questions.length) //total score of user b
          - (Object.keys(users[a].answers).length + users[a].questions.length) //total score of user a
        );
    }).slice(0, 10).map((id) => users[id]); // limit leaderboard to 10 total users
    return {
        leaders,
        users,
    };
}

export default connect(mapStateToProps)(LeaderBoard);
