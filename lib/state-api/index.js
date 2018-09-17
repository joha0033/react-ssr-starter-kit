// transpile to babel before publishing

class StateApi {
  constructor(rawData){
    this.data = {
      posts: this.mapIntoObject(rawData.posts),
      users: this.mapIntoObject(rawData.users)
    }
  }
  
  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur
      return acc
    }, {})
  }

  lookupAuthor = (id) => this.data.users[id]

  getState = () =>  this.data
  
}
  
export default StateApi