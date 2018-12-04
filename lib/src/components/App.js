import React from 'react'
import PostList from './postList'
import SearchBar from './searchBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostList />
      </div>
    )  
  }
}
 
export default App