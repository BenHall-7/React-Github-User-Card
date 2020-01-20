import React from 'react';
import styled from 'styled-components';

let User = styled.div`
    background: tan;
    width: 300px;
    margin: 20px auto;
`;

class UserCard extends React.Component {
    render() {
        return <User>
            user div here
        </User>
    }
}

export default UserCard;