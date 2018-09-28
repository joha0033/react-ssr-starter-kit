'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _PostList = require('../components/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('PostList', () => {
  it('renders post list', () => {

    const testProps = {
      posts: {
        a: { id: 'a' },
        b: { id: 'b' }
      },
      store: {
        lookupAuthor: jest.fn(() => ({}))
      }
    };

    const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PostList2.default, testProps));

    expect(wrapper.find('PostContainer').length);
    expect(wrapper).toMatchSnapshot();
  });
});