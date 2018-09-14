import React from 'react'

import Post from './Post'

const PostList = ( props ) => {
  return (
    <div>
      {
        Object.values(props.posts).map((post, index) => {
          return (
            <Post 
              key={index}
              post={post}
              author={props.users[post.user_id]}
            />
          )
        })            
      }
    </div>
  )
}

export default PostList