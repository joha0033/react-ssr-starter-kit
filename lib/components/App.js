import React from 'react'
// import axios from 'axios'

import PostList from './PostList'
// import DataApi from 'state-api'

class App extends React.Component {
  state = this.props.store.getState()
  render() {
    return ( 
      
      <PostList 
        posts={this.state.posts}
        store={this.props.store}
      />
    )
  }
}
 
export default App