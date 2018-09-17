import React from 'react'

const styles = {
  article:{
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#abc',
    borderBottomWidth: 2,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  content: {
    paddingLeft: 20,
    paddingRight: 10
  }
}

const Post = (props) => {
  const { post, store } = props
  const author = store.lookupAuthor(post.user_id)


  return ( 
    <div style={styles.article}>
      <div style={styles.title}>
        {post.title}
      </div>
      <div style={styles.author}>
        Author: {author.firstName} {author.lastName}
      </div>
      <div style={styles.content}>
        {post.content}
      </div>
    </div>
  )
}
 
export default Post