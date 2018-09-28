import StateApi from 'state-api'
import { data } from '../data'

const api = new StateApi(data)

describe('DataApi', () => {
  it('exposes posts as an object', () => {
    const posts = api.getState().posts
    const postId = data.posts[0]._id
    const postTitle = data.posts[0].title

    expect(posts).toHaveProperty(postId)
    expect(posts[postId].title).toBe(postTitle)
  })

  it('exposes authors as an object', () => {
    const users = api.getState().users
    const userId = data.users[0]._id
    const usersFirstName = data.users[0].firstName 
    
    expect(users).toHaveProperty(userId)
    expect(users[userId].firstName).toBe(usersFirstName)
  })
})