import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

let FollowersDiv = styled.div`
    background: tan;
    width: 250px;
    margin: 20px auto;
`;

class Followers extends React.Component {
    render() {
        return <FollowersDiv>
            {this.props.followers.map(follower =>
                <UserCard key={follower.login} user={follower}/>
            )}
        </FollowersDiv>
    }
}

export default Followers;