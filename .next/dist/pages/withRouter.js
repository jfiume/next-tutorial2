'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/next_tutorial2/pages/withRouter.js?entry';


var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return _react2.default.createElement('a', { href: href, onClick: handleClick, style: style, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, children);
};

exports.default = (0, _index.withRouter)(ActiveLink);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dpdGhSb3V0ZXIuanMiXSwibmFtZXMiOlsid2l0aFJvdXRlciIsIkFjdGl2ZUxpbmsiLCJjaGlsZHJlbiIsInJvdXRlciIsImhyZWYiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJwYXRobmFtZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFnQztNQUE3QixBQUE2QixnQkFBN0IsQUFBNkI7TUFBbkIsQUFBbUIsY0FBbkIsQUFBbUI7TUFBWCxBQUFXLFlBQVgsQUFBVyxBQUNqRDs7TUFBTTtpQkFBUSxBQUNDLEFBQ2I7V0FBTyxPQUFBLEFBQU8sYUFBUCxBQUFvQixPQUFwQixBQUEwQixRQUZuQyxBQUFjLEFBRTZCLEFBRzNDO0FBTGMsQUFDWjs7TUFJSSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsR0FBTSxBQUN6QjtNQUFBLEFBQUUsQUFDRjtXQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFIRCxBQUtBOzt5QkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFTLE1BQU0sU0FBZixBQUF3QixhQUFhLE9BQXJDLEFBQTRDO2dCQUE1QztrQkFBQSxBQUNHO0FBREg7R0FBQSxFQURGLEFBQ0UsQUFJSDtBQWhCRCxBQWtCQTs7a0JBQWUsdUJBQWYsQUFBZSxBQUFXIiwiZmlsZSI6IndpdGhSb3V0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZS9Eb2N1bWVudHMvbmV4dF90dXRvcmlhbDIifQ==