import React, { Component } from "react";
import Leader from "./Leader";
import UserCard from "./UserCard";
import Avatar from "./Avatar";
import Title from "./Title";
import Score from "./Score";
import { connect } from "react-redux";

class User extends Component {
    render() {
        const { leader } = this.props;
        return (
            <UserCard key={leader.id} >
                <Title title={leader.name} />
                <Avatar user={leader.id} />
                <Leader id={leader.id} />
                <Score score={Object.keys(leader.answers).length + leader.questions.length}/>
            </UserCard>
        );
    }
}

function mapStateToProps({ users }, { id }) {
    return (
        {
            leader: users[id],
        }    
    );
}

export default connect(mapStateToProps)(User);