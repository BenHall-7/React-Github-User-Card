import React from 'react';
import axios from 'axios';
import UserCard from './comp/UserCard';
import Followers from './comp/Followers';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      followers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/BenHall-7")
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  }

  render() {
    return <div className="App">
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
