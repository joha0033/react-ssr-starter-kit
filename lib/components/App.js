import React from 'react'
import PropTypes from 'prop-types'
import PostList from './PostList'

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    }
  }
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