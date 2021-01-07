import React from 'react'
import './App.css';
import CardList from './components/Card_List'
import SearchFilter from './components/Search_Box'

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  }
  handleSearch = (value) => {
    this.setState({
      searchField: value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state
    const searchFilters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchFilter
          placeholder="Search Monsters"
          searchField={this.state.searchField}
          searchFilter={this.handleSearch}
        />
        <CardList
          monsters={searchFilters}  
        />
      </div>
    )
  }
}

export default App;
