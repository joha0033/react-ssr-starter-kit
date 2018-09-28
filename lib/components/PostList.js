import React from 'react'

import PostContainer from './Post'

class PostList extends React.PureComponent {
  state = {  }
  render() { 
    return ( 
      <div>
        {
          Object.values(this.props.posts).map((post, index) => {
            return (
              <PostContainer 
                key={index}
                post={post}
              />
            )
          })            
        }
      </div>
    )
  }
}
 


export default PostList