import React, { Component } from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Things from "./Things";
import Users from "./Users";

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      things: []
    }
  }
  componentDidMount(){
    axios.get("/users")
         .then(response => response.data)
         .then(users => this.setState({users}))
         .then(() => {
            axios.get("/things")
                .then(response => response.data)
                .then(things => this.setState({things}));
          })
      .catch(e => console.log(e));
  }
  render(){
    return (
      <HashRouter>
        <div>
          <div>
            <h1>Acme Favorites</h1>
            <Navbar users={this.state.users} things={this.state.things}/>
          </div>
            <Switch>
              <Route exact path="/things" render={()=> <Things things={this.state.things}/>} />
              <Route exact path="/users" render={()=> <Users users={this.state.users}/>}/>
              <Route exact path="/" render={()=> <Users users={this.state.users}/>}/>
            </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
