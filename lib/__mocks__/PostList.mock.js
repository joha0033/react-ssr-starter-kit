// const posts = {
//   '5b341ce0f3f1090014b3d9d0':
//     {
//       content: 'Now that there is the Tec-9',
//       title: 'Github Basics',  
//       user_id: '5afa87f68ed0b10014567feb',
//       _id: '5b341ce0f3f1090014b3d9d0'
//     },
//   '5b341d1af3f1090014b3d9d1':
//     {
//       content: 'Now that there is the Tec-9',
//       title: 'Github Intro',
//       user_id: '5afa87f68ed0b10014567feb',
//       _id: '5b341d1af3f1090014b3d9d1'
//     }
// }
// export default function request(url) {
//     return new Promise(resolve => {
//       // This is an example of an http request, for example to fetch
//       // user data from an API.
//       // This module is being mocked in __mocks__/request.js
//       http.get({path: url}, response => {
//         let data = '';
//         response.on('data', _data => (data += _data));
//         response.on('end', () => resolve(data));
//       });
//     });
//   }
  
// export default function request(url) {
//   return new Promise((resolve, reject) => {
//     const userID = parseInt(url.substr('/users/'.length), 10)
//     process.nextTick(
//       () =>
//         users[userID]
//           ? resolve(users[userID])
//           : reject({
//             error: 'User with ' + userID + ' not found.',
//           }),
//     )
//   })
// }