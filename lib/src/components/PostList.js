import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import { postListActions } from '../_actions/postList.actions'
import { connect } from 'react-redux'
import pickBy from 'lodash.pickby'

export class PostList extends React.Component {
  render() {
    const posts = () => {
      return pickBy(this.props.postList.posts, 
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
          <Post 
            key={index}
            post={post}
          />
        )
      })
    }
      
    const loading = () => (<div>LOADING... </div>)

    return ( 
      <div>
        {
          // posts()
          this.props.postList.loading
            ? loading()
            : postList(posts())           
        }
      </div>
    )
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired
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
      dispatch(postListActions.fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)