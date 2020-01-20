import React from 'react';
import axios from 'axios';
import UserCard from './comp/UserCard';
import Followers from './comp/Followers';

import './App.css';

const UserName = "BenHall-7";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${UserName}`)
      .then(res => {
        this.setState({
          user: res.data
        });

        return axios.get(`https://api.github.com/users/${UserName}/followers`)
      })
      .then(res => Promise.all(
        res.data.map(follower => axios.get(follower.url))
      ))
      .then(res => {
        this.setState({
          followers: res.map(f => f.data)
        })
      })
      .catch(console.error);
  }

  render() {
    return <div className="App">
      <h1 style={{fontSize: "4em", textDecoration: "underline"}}>My GitHub Profile:</h1>
      {
        this.state.user
        && <UserCard user={this.state.user}/>
      }
      {
        this.state.followers
        && this.state.followers.length > 0
        && <Followers followers={this.state.followers}/>
      }
    </div>
  }
}

export default App;
