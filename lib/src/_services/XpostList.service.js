// import config from '../../config'

// const fetchPosts = (token) => {
//   let options = {
//     headers: {
//       authorization: token
//     }
//   }
    
//   let URL = `http://${config.host}:${config.port}/data`
    
//   return fetch(URL, options)
//     .then((response) => {
            
//       if (!response.ok) {      
//         return Promise.reject(response.statusText)
//       }
//       return response.json()
//     })
//     .then((response) => {
      
//       if (response) {
//         const mapIntoObject = (arr) => {
//           return arr.reduce((acc, cur) => {
//             acc[cur._id] = cur
//             return acc
//           }, {})
//         }
//         let newRes = {}
        
//         Object.keys(response).forEach((key) => {
//           // console.log('key>>', key)
          
//           let obj = mapIntoObject(response[key], key)
//           newRes = {
//             ...newRes,
//             [key]: obj
//           }
//         })
        
//         return newRes
//       }
//       return null
//     }).catch((err) => alert(err))
// }

// export const postListService = {
//   fetchPosts
// }