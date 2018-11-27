import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import pickby from 'lodash.pickby'
import { postListActions } from '../_actions/postList.actions'

// put in store?!
let cache_object = {}

export class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  loading = () => (<div>LOADING... </div>)

  posts = (searchTerm, posts) => {
    let cachedResults = () => {
      return cache_object[searchTerm]
    }
    let results = searchTerm in cache_object
      ? cachedResults()
      : cache_object[searchTerm] = pickby(posts, 
        (post) => {
          let SearchCriteria = this.props.searchBar.searchTerm
          
          if(this.props.searchBar.searchTerm){
            SearchCriteria = new RegExp(SearchCriteria, 'i')
          }
          return post.title.match(SearchCriteria) || post.content.match(SearchCriteria)
        })
      
    return results
  }

  postList = (posts) => {
    return Object.values(posts).map((post, index) => {
      const { firstName, lastName } = this.props.postList.users[post.user_id]      
      const author = firstName + ' ' + lastName

      post = {
        ...post,
        author
      }
      
      return (
        <Post key={index} post={post} />
        
      )
    })
  }
  render() {
    const { searchTerm } = this.props.searchBar
    const { posts } = this.props.postList
    return this.props.postList.loading
      ? this.loading()
      : this.postList(this.posts(searchTerm, posts))
       
  }
}
 
export const mapStateToProps = (state) => {
  const { postList, searchBar } = state
  return {
    postList,
    searchBar
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(postListActions.fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)