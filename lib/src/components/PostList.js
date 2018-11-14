import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import pickby from 'lodash.pickby'
import { fetchPosts } from '../_actions/postList.actions'


export class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  render() {
    const posts = () => {
      
      return pickby(this.props.postList.posts, 
        (post) => {
          let SearchCriteria = this.props.searchBar.searchTerm
          if(this.props.searchBar.searchTerm){
            SearchCriteria = new RegExp(SearchCriteria, 'i')
          }
          return post.title.match(SearchCriteria) || post.content.match(SearchCriteria)
        })
    }
    const postList = () => {
      return Object.values(posts()).map((post, index) => {
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
      
    const loading = () => (<div>LOADING... </div>)
    
    return this.props.postList.loading
      ? loading()
      : postList()
       
  }
}
 
export const mapStateToProps = (state) => {
  const { postList, searchBar } = state
  return {
    postList,
    searchBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)