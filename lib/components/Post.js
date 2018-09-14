import React from 'react'

const Post = (props) => {
  const { post, author } = props
  console.log(props)
  return ( 
    <div>
      <div>
        {post.title}
      </div>
      <div>
        {author.firstName} {author.lastName}
      </div>
      <div>
        {post.body}
      </div>
    </div>
  )
}
 
export default Post