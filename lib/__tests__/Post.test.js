import React from 'react'
import Post from '../src/components/Post'
import renderer from 'react-test-renderer'

describe('Post Component', () => {
  it('Renders post to equal snapshot', () => {
    const post = {
      author: 'austin digger',
      content: 'You think water moves fast?',
      title: 'Text Editor',
      user_id: '5',
      _id: '5'
    }
    
    const tree = renderer
      .create(<Post post={post}/>)
      .toJSON()
      
    expect(typeof post).toBe('object')
    expect(tree).toMatchSnapshot()
  })
})