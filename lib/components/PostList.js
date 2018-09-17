import React from 'react'

import PostContainer from './Post'

const PostList = ( props ) => {
  return (
    <div>
      {
        Object.values(props.posts).map((post, index) => {
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

export default PostList