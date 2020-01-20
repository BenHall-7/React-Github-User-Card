import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

let FollowersDiv = styled.div`
    margin: 20px auto;
`;

class Followers extends React.Component {
    render() {
        return (
            <FollowersDiv style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{fontSize: "3em", textDecoration: "underline"}}>Followers:</h1>
                {this.props.followers.map(follower =>
                    <UserCard
                        img_width={300}
                        key={follower.login}
                        user={follower}
                    />
                )}
            </FollowersDiv>
        )
    }
}

export default Followers;