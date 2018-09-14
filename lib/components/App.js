import React from 'react'

import PostList from './PostList'

import DataApi from '../DataApi'
import { data } from '../data'

const api = new DataApi(data)

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      posts: api.getPosts(),
      users: api.getUsers()
    }
  }
  
  postActions = {
    lookupAuthor: (id) => this.state.users[id]
  }
  render() {
    
    return ( 
      
      <PostList 
        posts={this.state.posts}
        postActions={this.postActions}
      />
    )
  }
}
 
export default App