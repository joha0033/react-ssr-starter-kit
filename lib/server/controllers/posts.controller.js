import { data } from '../../data.json'

export const postController = {
  getPosts: (req, res) => {
    // create controllers when more routes available
    const mapIntoObject = (arr) => {
      return arr.reduce((acc, cur) => {
        acc[cur._id] = cur
        return acc
      }, {})
    }
        
    let resp = {} 
    Object.keys(data).forEach((key) => {
      const array = data[key]
      let obj = mapIntoObject(array)
      resp = {
        ...resp,
        [key]: obj
      }
    })
          
    res.json(resp)
  }
}