import React from 'react'
import Post from './Post'
import { postListActions } from '../_actions/postList.actions'
import { connect } from 'react-redux'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  
  render() {
    const posts = () => {
      let arr = Object
        .values(this.props.postList.posts)
        .map((post, index) => {
          let { firstName, lastName } = this.props.postList.users[post.user_id]
          let author = firstName + ' ' + lastName
            
          let postWithAuthor = {
            ...post,
            author
          }
          return (
            <Post 
              key={index}
              post={postWithAuthor}
            />
          )
        }) 
      return arr
    }

    const loading = () => (<div>LOADING... </div>)

    return ( 
      <div>
        {
          this.props.postList.loading
            ? loading()
            : posts()           
        }
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  const { postList } = state
  return {
    postList
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