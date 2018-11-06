import React from 'react'
import PostList from './PostList'
import SearchBar from './SearchBar'

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