webpackHotUpdate(5,{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(400);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(101);

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

var href = '/?counter=10';
var as = href;
_index2.default.push(href, as, { shallow: true });

// componentWillReceiveProps(nextProps) {
//   const { pathname, query } = nextProps.url
//   // fetch data based on the new query
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiaGFuZGxlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm9uUm91dGVDaGFuZ2VTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJlcnIiLCJjYW5jZWxsZWQiLCJvbkFwcFVwZGF0ZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJuZXh0VXJsIiwiYXMiLCJzaGFsbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsMERBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIscUJBQW9CLE9BQWxELEFBQXdELGdCQUFlLEtBQXZFLEFBQTJFO2dCQUEzRTtrQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9CQUFtQixPQUFqRCxBQUF1RCxnQkFBZSxLQUF0RSxBQUEwRTtnQkFBMUU7a0JBTkosQUFLRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDUSwwQkFBQSxjQUFBLFVBQU0sU0FBTixBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FEUixBQUNRLFNBVkcsQUFDYixBQVFFO0FBVEo7O0FBZUEsSUFBTSxVQUFVLFNBQVYsQUFBVSxVQUFBO3lCQUNkLEFBQU87Y0FBSyxBQUNBLEFBQ1Y7V0FBTyxFQUFFLE1BSEcsQUFDZCxBQUFZLEFBRUgsQUFBUTtBQUZMLEFBQ1YsR0FERjtBQURGOztBQU1BLGdCQUFBLEFBQU8scUJBQXFCLGVBQU8sQUFDakM7VUFBQSxBQUFRLElBQVIsQUFBWSx3QkFBWixBQUFvQyxBQUNyQztBQUZEOztBQUlBLGdCQUFBLEFBQU8scUJBQXFCLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBUSxBQUN4QztNQUFJLElBQUosQUFBUSxXQUFXLEFBQ2pCO1lBQUEsQUFBUSxrQkFBUixBQUF3QixNQUN6QjtBQUNGO0FBSkQ7O0FBTUEsZ0JBQUEsQUFBTyxlQUFlLG1CQUFXLEFBQy9CO0FBQ0E7V0FBQSxBQUFTLE9BQVQsQUFBZ0IsQUFDakI7QUFIRDs7QUFLQSxJQUFNLE9BQU4sQUFBYTtBQUNiLElBQU0sS0FBTixBQUFXO0FBQ1gsZ0JBQUEsQUFBTyxLQUFQLEFBQVksTUFBWixBQUFrQixJQUFJLEVBQUUsU0FBeEIsQUFBc0IsQUFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZS9Eb2N1bWVudHMvbmV4dF90dXRvcmlhbDIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/joe/Documents/next_tutorial2/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/joe/Documents/next_tutorial2/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMTM4NWNmOWJkOGQ1OWMwZWFlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDlhMWMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wXCIgd2lkdGg9XCJkZXZpY2Utd2lkdGhcIiBrZXk9XCJ2aWV3cG9ydFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRhbC1zY2FsZT0xLjJcIiB3aWR0aD1cImRldmljZS13aWR0aFwiIGtleT1cInZpZXdwb3J0XCI+PC9tZXRhPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2PlxuICAgICAgQ2xpY2sgPHNwYW4gb25DbGljaz17aGFuZGxlcn0+aGVyZTwvc3Bhbj4gdG8gcmVhZCBtb3JlXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5cbmNvbnN0IGhhbmRsZXIgPSAoKSA9PlxuICBSb3V0ZXIucHVzaCh7XG4gICAgcGF0aG5hbWU6ICcvYWJvdXQnLFxuICAgIHF1ZXJ5OiB7IG5hbWU6ICdaZWl0JyB9XG4gIH0pXG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4ge1xuICBjb25zb2xlLmxvZygnQXBwIGlzIGNoYW5naW5nIHRvOiAnLCB1cmwpO1xufVxuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKGVyciwgdXJsKSA9PiB7XG4gIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgY29uc29sZS5sb2coYFJvdXRlIHRvICR7dXJsfSB3YXMgY2FuY2VsbGVkYCk7XG4gIH1cbn1cblxuUm91dGVyLm9uQXBwVXBkYXRlZCA9IG5leHRVcmwgPT4ge1xuICAvLyBwZXJzaXN0IHRoZSBsb2NhbCBzdGF0ZVxuICBsb2NhdGlvbi5ocmVmID0gbmV4dFVybFxufVxuXG5jb25zdCBocmVmID0gJy8/Y291bnRlcj0xMCdcbmNvbnN0IGFzID0gaHJlZlxuUm91dGVyLnB1c2goaHJlZiwgYXMsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuXG4vLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuLy8gICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gbmV4dFByb3BzLnVybFxuLy8gICAvLyBmZXRjaCBkYXRhIGJhc2VkIG9uIHRoZSBuZXcgcXVlcnlcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=