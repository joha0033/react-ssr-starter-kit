import React from 'react'
import PostList from '../components/PostList'

import renderer from 'react-test-renderer'

describe('PostList', () => {
  it('renders post list', () => {

    const testProps = {
      posts: {
        a: { id: 'a' },
        b: { id: 'b' }
      },
      store:{
        lookupAuthor: jest.fn(() => ({}))
      } 
    }

    const tree = renderer.create(
      <PostList 
        { ...testProps}
      />
    ).toJSON()
    
    expect(tree.children.length).toBe(2)
    expect(tree).toMatchSnapshot()
  })
})