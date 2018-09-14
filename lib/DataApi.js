class DataApi {
  constructor(rawData){
    this.rawData = rawData
  }

  mapIntoObject(arr){
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur
      return acc
    }, {})
  }

  getPosts() {
    return this.mapIntoObject(this.rawData.posts)
  }

  getUsers() {
    return this.mapIntoObject(this.rawData.users)
  }
}

export default DataApi