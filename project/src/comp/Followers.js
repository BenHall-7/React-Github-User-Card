import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

let FollowersDiv = styled.div`
    width: 400px;
    margin: 20px auto;
`;

class Followers extends React.Component {
    render() {
        return <FollowersDiv>
            {this.props.followers.map(follower =>
                <UserCard
                    width={300}
                    key={follower.login}
                    user={follower}
                />
            )}
        </FollowersDiv>
    }
}

export default Followers;