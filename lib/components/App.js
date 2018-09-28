import React from 'react'
import PropTypes from 'prop-types'
import PostList from './PostList'
import SearchBar from './SearchBar'
import pickBy from 'lodash.pickby'
import Timestamp from './Timestamp'

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  appState = () => {
    const { posts, searchTerm } = this.props.store.getState()
    return { posts, searchTerm }
  }
  state = this.appState()
  onStoreChange = () => {
    this.setState(this.appState)
  }

  // subscribe to store changes 
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
    this.props.store.startClock()
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId)
  }
  render() {
    let {posts, searchTerm} = this.state
    const SearchRE = new RegExp(searchTerm, 'i')
    if(searchTerm) {
      posts = pickBy(posts, (value) =>
        (value.title.match(SearchRE) || value.content.match(SearchRE)))
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <PostList 
          posts={posts}
        />
      </div>
    )  
  }
}
 
export default App