import { mapStateToProps } from '../src/components/PostList'
import { postListService }from '../src/_services/postList.service'
import axios from 'axios'

jest.mock('axios')

describe('PostList Component - Container', () => {
  
  it('fetches post data', () => {
    const sampleRes = {
      data: {
        posts: [
          {
            content: 'Now that there is the Tec-9',
            title: 'Github Basics',
            user_id: '5afa87f68ed0b10014567feb',
            _id: '5b341ce0f3f1090014b3d9d0' 
          }
        ],
        users: [
          {
            email: 'austin@gmail.com',
            firstName: 'austin',
            lastName: 'digger',
            _id: '5abd9c22378a4c001444ee97'
          }
        ]
      }
        
      
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(sampleRes))
    
    return postListService.fetchPosts().then((res) => {
      expect(res).toEqual(sampleRes.data)
    })


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
})

