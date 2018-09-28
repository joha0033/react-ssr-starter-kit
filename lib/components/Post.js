import React from 'react'
import PropTypes from 'prop-types'
import storeProvider from './storeProvider'

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
  state = {  }
  render() { 
    const { post, author } = this.props
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

function mapProps(store, props) {
  return {
    author: store.lookupAuthor(props.post.user_id)
  }
}
  
// access store for extracting data in a container when Redux is hooked up.

export default storeProvider(mapProps)(Post)