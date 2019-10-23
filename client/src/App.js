import React, { Component } from 'react';
import './Style.css';
import "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import List from './Components/List';
import New from './Components/New';
import Edit from './Components/Edit';
import Info from './Components/Info';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
         <h1>Pet Shelter</h1>
         <div className="App">
          <Route exact path="/" component={List} />
          <Route path="/new" component={New} />
          <Route path="/pets/:_id/edit/" component={Edit} />
          <Route exact path="/pet/:_id" component={Info} />
          </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
