'use strict';

var _stateApi = require('state-api');

var _stateApi2 = _interopRequireDefault(_stateApi);

var _data = require('../data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _stateApi2.default(_data.data);

describe('DataApi', () => {
  it('exposes posts as an object', () => {
    const posts = api.getState().posts;
    const postId = _data.data.posts[0]._id;
    const postTitle = _data.data.posts[0].title;

    expect(posts).toHaveProperty(postId);
    expect(posts[postId].title).toBe(postTitle);
  });

  it('exposes authors as an object', () => {
    const users = api.getState().users;
    const userId = _data.data.users[0]._id;
    const usersFirstName = _data.data.users[0].firstName;

    expect(users).toHaveProperty(userId);
    expect(users[userId].firstName).toBe(usersFirstName);
  });
});