import React from 'react'
import PropTypes from 'prop-types'

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


class Post extends React.PureComponent {
  
  render() {
    const post = this.props.post
    return ( 
      <div style={styles.article}>
        <div style={styles.title}>
          {post.title}
        </div>
        <div style={styles.author}>
            Author: {post.author}
        </div>
        <div style={styles.content}>
          {post.content}
        </div>
      </div>
    )
  }
}

Post.propTypes ={
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }),
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
}

export default Post
