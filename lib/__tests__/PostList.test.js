import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PostList } from '../src/components/PostList'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

import { mapStateToProps, mapDispatchToProps } from '../src/components/PostList'
import { postListActions } from '../src/_actions/postList.actions'
import postListReducer from '../src/_reducers/postList.reducer'

import { 
  fetchingPosts,
  postFetchSuccess,
  postFetchFailure 
} from '../src/_constants'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios')

function setupLoading() {
  const props = {
    fetchPosts: jest.fn(),
    postList: {
      loading: true,
      users: {
        b341ce0f3f1090014b3d9d0: {
          email: 'austin@gmail.com',
          firstName: 'austin',
          lastName: 'digger',
          _id: 'b341ce0f3f1090014b3d9d0'}
      },
      posts: {
        b341ce0f3f1090014b3d9d1: {
          _id: 'b341ce0f3f1090014b3d9d1',
          user_id: 'b341ce0f3f1090014b3d9d0',
          title: 'Github Basics',
          content: 'It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit. '
        },
        b341ce0f3f1090014b3d9d2: {
          _id: 'b341ce0f3f1090014b3d9d2',
          user_id: 'b341ce0f3f1090014b3d9d0',
          title: 'CLI Basics',
          content: 'It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit. '
        }
      }
    },
    searchBar: {
      searchTerm: ''
    }
  }

  const enzymeWrapper = shallow(<PostList {...props} />)
  
  return {
    props,
    enzymeWrapper
  }
}
describe('PostList Component - Container', () => {
  it('Renders PostList to equal snapshot [loading: true]', () => {

    const { props } = setupLoading() 
    
    const tree = renderer
      .create(<PostList {...props}/>)
      .toJSON()
      
    expect(tree).toMatchSnapshot()
  })
  it('Loading function returns a div - [loading: true]', () => {
    const { props } = setupLoading()
    const component = shallow(<PostList {...props}/>)
    const loading = component.instance().loading()
    expect(loading).toEqual(<div>LOADING... </div>)
  })
  it('Posts function returns a Post component - [loading: false]', () => {
    let { props } = setupLoading() 
    props = {
      ...props,
      postList: {
        ...props.postList,
        loading: false
      }
    }
    const component = shallow(<PostList {...props}/>)
    const postComponent = component.instance().postList(props.postList.posts)
    let output = renderer.create(postComponent[0]).toJSON()
    expect(typeof postComponent[0]).toEqual('object')
    expect(postComponent.length).toEqual(2)
    expect(output).toMatchSnapshot()
  })
  it('Posts function returns a Post component - [loading: false, searchTer: \'Git\']', () => {
    let { props } = setupLoading() 
    props = {
      ...props,
      postList: {
        ...props.postList,
        loading: false
      },
      searchBar: {
        ...props.searchBar,
        searchTerm: 'Git'
      }
    }
    const component = shallow(<PostList {...props}/>)
    const postComponent = component.instance().posts(props.searchBar.searchTerm, props.postList.posts)
    let output = renderer.create(postComponent[0]).toJSON()
    expect(postComponent.b341ce0f3f1090014b3d9d1.title).toEqual(props.postList.posts.b341ce0f3f1090014b3d9d1.title)
    expect([postComponent].length).toEqual(1)
    expect(output).toMatchSnapshot()
  })
  it('Renders PostList to equal snapshot [loading: false]', () => {

    let { props } = setupLoading() 
    props = {
      ...props,
      postList: {
        ...props.postList,
        loading:false
      }
    }
    const tree = renderer
      .create(<PostList {...props}/>)
      .toJSON()
      
    expect(tree).toMatchSnapshot()
  })
  it('maps state to props', () => {
    let samplePost = {
      _id: '5b341ce0f3f1090014b3d9d0',
      user_id: '5afa87f68ed0b10014567feb',
      title: 'Github Basics',
      content: 'It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit. '
    }
    const appState = {
      postList:{
        posts: [samplePost]
      },
      searchBar: undefined
    }
    let ownProps = {
      loading: true
    }
    let componentState = mapStateToProps(appState, ownProps)
    expect(componentState.postList.posts[0]).toEqual(samplePost)
  })
  it('maps dispatch to props', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).fetchPosts()
    expect(typeof mapDispatchToProps(dispatch)).toEqual('object')
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function')
  })
})

describe('Post List - actions', () => {
  // const loading = true
  // const success = true
  let store
  beforeEach(() => {
    store = mockStore({})
  })
  it('should create FETCHING_POST_LIST action', () => {
    const expectedAction = {
      type: 'FETCHING_POST_LIST'
    }
    expect(fetchingPosts()).toEqual(expectedAction)
  })
  it('should create POST_LIST_SUCCESS action', () => {
    const posts = ['posts']
    const expectedAction = {
      type: 'POST_LIST_SUCCESS',
      data: posts
      
    }
    expect(postFetchSuccess(posts)).toEqual(expectedAction)
  })
  it('should create POST_LIST_FAILURE action', () => {
    const error = 'error'
    const expectedAction = {
      type: 'POST_LIST_FAILURE',
      error,
    }
    expect(postFetchFailure(error)).toEqual(expectedAction)
  })
  it('should dispatch postList action success', () => {
    const expectedAction = [
      {
        type: 'FETCHING_POST_LIST',
      },{
        type: 'POST_LIST_SUCCESS',
        data: []
      }]

    
    axios.get.mockImplementationOnce(() => Promise.resolve({data:[]})) 
    store.dispatch(postListActions.fetchPosts()).then(() => {
      const actions = store.getActions()
      expect(actions).toEqual(expectedAction)
    })  
  })
  it('should dispatch postList action failure', () => {
    const error = {
      error: 'test error'
    }
    const expectedAction = [
      {
        type: 'FETCHING_POST_LIST',
      },{
        type: 'POST_LIST_FAILURE',
        error,
      }]
    axios.get.mockImplementationOnce(() => Promise.reject({error: 'test error'})) 
    store.dispatch(postListActions.fetchPosts()).then(() => {
      const actions = store.getActions()
      expect(actions).toEqual(expectedAction)
    })  
  })
})

describe('Post List Reducer', () => {
  it('should reduce for post list', () => {
    expect(postListReducer(undefined, {})).toEqual(
      {
        loading: true
      }
    )
  })
  it('should handle FETCHING_POST_LIST', () => {
    expect(postListReducer(undefined, {
      type: 'FETCHING_POST_LIST',
      loading: true
    })).toEqual({
      loading: true
    })
  })
  it('should handle POST_LIST_SUCCESS', () => {
    expect(postListReducer(undefined, {
      type: 'POST_LIST_SUCCESS',
      // loading: false,
      // success: true,
      data:{
        posts: [],
        users: []
      }
    })).toEqual({
      loading: false,
      success: true,
      posts: [],
      users: []
    })
  })
  it('should handle POST_LIST_FAILURE', () => {
    expect(postListReducer(undefined, {
      type: 'POST_LIST_FAILURE',
      loading: false,
      success: false,
      error: 'error'
    })).toEqual({
      loading: false,
      success: false,
      error: 'error'
    })
  })
})

