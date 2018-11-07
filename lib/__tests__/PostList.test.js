import { mapStateToProps } from '../src/components/PostList'

describe('PostList Component Container', () => {
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