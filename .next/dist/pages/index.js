'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/next_tutorial2/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0', width: 'device-width', key: 'viewport', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'inital-scale=1.2', width: 'device-width', key: 'viewport', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Click ', _react2.default.createElement('span', { onClick: handler, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'here'), ' to read more'));
};

var handler = function handler() {
  return _index2.default.push({
    pathname: '/about',
    query: { name: 'Zeit' }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiaGFuZGxlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7OztrQkFBZSxZQUFBO3lCQUNiLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDBEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLHFCQUFvQixPQUFsRCxBQUF3RCxnQkFBZSxLQUF2RSxBQUEyRTtnQkFBM0U7a0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTt1QkFFRixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixvQkFBbUIsT0FBakQsQUFBdUQsZ0JBQWUsS0FBdEUsQUFBMEU7Z0JBQTFFO2tCQU5KLEFBS0UsQUFDRSxBQUVGO0FBRkU7dUJBRUYsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ1EsMEJBQUEsY0FBQSxVQUFNLFNBQU4sQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBRFIsQUFDUSxTQVZHLEFBQ2IsQUFRRTtBQVRKOztBQWNBLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBQTt5QkFDZCxBQUFPO2NBQUssQUFDQSxBQUNWO1dBQU8sRUFBRSxNQUhHLEFBQ2QsQUFBWSxBQUVILEFBQVE7QUFGTCxBQUNWLEdBREY7QUFERiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9lL0RvY3VtZW50cy9uZXh0X3R1dG9yaWFsMiJ9