import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'

import PostList from '../components/PostList'

Enzyme.configure({ adapter: new Adapter() })

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

    const wrapper = shallow(
      <PostList 
        { ...testProps}
      />
    )
      
    expect(wrapper.find('PostContainer').length)
    expect(wrapper).toMatchSnapshot()
  })
})