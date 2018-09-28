// transpile to babel before publishing

class StateApi {
  constructor(rawData){
    this.data = {
      posts: this.mapIntoObject(rawData.posts),
      users: this.mapIntoObject(rawData.users),
      searchTerm: '',
      timestamp: new Date()
    },
    this.subscription = {},
    this.lastSubscriptionId = 0
  }
  
  
  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur
      return acc
    }, {})
  }

  lookupAuthor = (id) => 
    this.data.users[id]

  getState = () => 
    this.data

  subscribe = (cb) => {
    this.lastSubscriptionId++
    this.subscription[this.lastSubscriptionId] = cb
    return this.lastSubscriptionId
  }
  
  unsubscribe = (subscriptionId) =>
    delete this.subscribe[subscriptionId]

  notifySubscribers = () => 
    Object.values(this.subscription).forEach((cb) => cb())

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    }
    this.notifySubscribers()
  }

  setSearchTerm = (searchTerm) =>{ 
    this.mergeWithState({
      searchTerm
    })
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      })
    }, 1000)
  }

}
  
export default StateApi