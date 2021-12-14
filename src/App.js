import React from 'react';
import { CardList } from './components/cardlist/card-list.component';
import { SearchBox } from './components/search/search.component';

import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchMonster: ''
    }
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState({monsters: users}));
  }
  handleChange = (e) => {
    this.setState({searchMonster: e.target.value})
  }
  render(){
    const {monsters, searchMonster} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())  
    )
    return (
      <div className="App">
        <SearchBox 
          placeHolder='Search monsters'
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonster}/>
      </div>
    );
  }
}

//export default App;
