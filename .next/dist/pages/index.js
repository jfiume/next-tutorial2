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

_index2.default.onRouteChangeStart = function (url) {
  console.log('App is changing to: ', url);
};

_index2.default.onRouteChangeError = function (err, url) {
  if (err.cancelled) {
    console.log('Route to ' + url + ' was cancelled');
  }
};

_index2.default.onAppUpdated = function (nextUrl) {
  // persist the local state
  location.href = nextUrl;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiaGFuZGxlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm9uUm91dGVDaGFuZ2VTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJlcnIiLCJjYW5jZWxsZWQiLCJvbkFwcFVwZGF0ZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJuZXh0VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsMERBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIscUJBQW9CLE9BQWxELEFBQXdELGdCQUFlLEtBQXZFLEFBQTJFO2dCQUEzRTtrQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9CQUFtQixPQUFqRCxBQUF1RCxnQkFBZSxLQUF0RSxBQUEwRTtnQkFBMUU7a0JBTkosQUFLRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDUSwwQkFBQSxjQUFBLFVBQU0sU0FBTixBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FEUixBQUNRLFNBVkcsQUFDYixBQVFFO0FBVEo7O0FBY0EsSUFBTSxVQUFVLFNBQVYsQUFBVSxVQUFBO3lCQUNkLEFBQU87Y0FBSyxBQUNBLEFBQ1Y7V0FBTyxFQUFFLE1BSEcsQUFDZCxBQUFZLEFBRUgsQUFBUTtBQUZMLEFBQ1YsR0FERjtBQURGOztBQU1BLGdCQUFBLEFBQU8scUJBQXFCLGVBQU8sQUFDakM7VUFBQSxBQUFRLElBQVIsQUFBWSx3QkFBWixBQUFvQyxBQUNyQztBQUZEOztBQUlBLGdCQUFBLEFBQU8scUJBQXFCLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBUSxBQUN4QztNQUFJLElBQUosQUFBUSxXQUFXLEFBQ2pCO1lBQUEsQUFBUSxrQkFBUixBQUF3QixNQUN6QjtBQUNGO0FBSkQ7O0FBTUEsZ0JBQUEsQUFBTyxlQUFlLG1CQUFXLEFBQy9CO0FBQ0E7V0FBQSxBQUFTLE9BQVQsQUFBZ0IsQUFDakI7QUFIRCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9lL0RvY3VtZW50cy9uZXh0X3R1dG9yaWFsMiJ9