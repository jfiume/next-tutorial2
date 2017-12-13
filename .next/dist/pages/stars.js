'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/next_tutorial2/pages/stars.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
  var stars = _ref.stars;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, 'Next stars: ', stars);
};

Page.getInitalProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://api.github.com/repos/zeit/next.js');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', { stars: json.stargazers_count });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0YXJzLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJzdGFycyIsImdldEluaXRhbFByb3BzIiwicmVxIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic3RhcmdhemVyc19jb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFdBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRzt5QkFDZCxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQSxFQUNlLGdCQUZKLEFBQ1g7QUFERjs7QUFLQSxLQUFBLEFBQUssNkJBQUw7dUZBQXNCLHdCQUFBO1FBQUEsQUFBUyxZQUFULEFBQVM7YUFBVDtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNGLE1BREUsQUFDRixBQUFNOztlQUFsQjtBQURjLDJCQUFBOzRCQUFBO21CQUVELElBRkMsQUFFRCxBQUFJOztlQUFqQjtBQUZjLDRCQUFBOzZDQUdiLEVBQUUsT0FBTyxLQUhJLEFBR2IsQUFBYzs7ZUFIRDtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXRCOzt1QkFBQTs2QkFBQTtBQUFBO0FBTUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3RhcnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZS9Eb2N1bWVudHMvbmV4dF90dXRvcmlhbDIifQ==