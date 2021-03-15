import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      monsters: []
    };   
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters:users }))
  }
  componentDidUpdate(){
    console.log(this.state.searchField)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // destructuring: const monsters = this.state.monsters
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredMonsters);
    return(
      <div className="App">
\        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters"
          injectedOnChange={ this.handleChange }
        />
          <CardList monsters = {filteredMonsters}/>
\    </div>
    )
  }
}

export default App;
