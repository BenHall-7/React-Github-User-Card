import React from 'react';

const DEFAULT_WIDTH = 400;

class UserCard extends React.Component {
    render() {
        let {avatar_url, name, html_url, bio} = this.props.user;
        let width = this.props.width || DEFAULT_WIDTH;
        return (
            <div style={{
                display: "flex",
                margin: "20px auto 20px",
                width: width + 200,
                border: "1px black solid",
            }}>
                <img src={avatar_url}
                    alt={name}
                    style={{
                        objectFit: "cover",
                        width: width,
                    }}
                />
                <div style={{padding: 15}}>
                    <a href={html_url}>{name}</a>
                </div>
            </div>
        )
    }
}

export default UserCard;