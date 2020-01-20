import React from 'react';

const DEFAULT_IMG_WIDTH = 400;
const DEFAULT_DESC_WIDTH = 200;

class UserCard extends React.Component {
    render() {
        let {avatar_url, name, html_url, bio} = this.props.user;
        let img_width = this.props.img_width || DEFAULT_IMG_WIDTH;
        let desc_width = this.props.desc_width || DEFAULT_DESC_WIDTH;
        return (
            <div style={{
                display: "inline-flex",
                margin: "20px auto 20px",
                border: "1px black solid",
                textAlign: "center",
            }}>
                <img src={avatar_url}
                    alt={name}
                    style={{
                        objectFit: "cover",
                        width: img_width,
                    }}
                />
                <div style={{padding: 15, width: desc_width}}>
                    <a href={html_url}>{name}</a>
                    <p>{bio}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;