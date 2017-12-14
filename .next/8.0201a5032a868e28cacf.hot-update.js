webpackHotUpdate(8,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _dynamic = __webpack_require__(414);

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/next_tutorial2/pages/dynamic.js?entry';


var DynamicComponent = (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    var m = __webpack_require__(415);

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}) : new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/(415);

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    try {
      var m = __webpack_require__(415);

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var DynamicComponentWithCustomLoading = (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    var m = __webpack_require__(415);

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}) : new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/(415);

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    try {
      var m = __webpack_require__(415);

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}), {
  loading: function loading() {
    return _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, '...');
  }
});

var DynamicComponentWithNoSSR = (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    var m = __webpack_require__(415);

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}) : new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/(415);

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(7).then((function (require) {
    try {
      var m = __webpack_require__(415);

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}), {
  ssr: false
});

// export default () =>
//   <div>
//     {/* <Header /> */}
//     <DynamicComponentWithNoSSR />
//     <p style={{color: 'white'}}>HOME PAGE is here!</p>
//   </div>


var HelloBundle = (0, _dynamic2.default)({
  modules: function modules(props) {
    var components = {
      Hello1: typeof window === 'undefined' ? new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
        eval('require.ensure = function (deps, callback) { callback(require) }');

        __webpack_require__.e/* require.ensure */(7).then((function (require) {
          var m = __webpack_require__(415);

          m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
          resolve(m);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }) : new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
        var weakId = /*require.resolve*/(415);

        try {
          var weakModule = __webpack_require__(weakId);

          return resolve(weakModule);
        } catch (err) {}

        __webpack_require__.e/* require.ensure */(7).then((function (require) {
          try {
            var m = __webpack_require__(415);

            resolve(m);
          } catch (error) {
            reject(error);
          }
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }),
      Hello2: typeof window === 'undefined' ? new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
        eval('require.ensure = function (deps, callback) { callback(require) }');

        __webpack_require__.e/* require.ensure */(7).then((function (require) {
          var m = __webpack_require__(415);

          m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
          resolve(m);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }) : new (__webpack_require__(414).SameLoopPromise)(function (resolve, reject) {
        var weakId = /*require.resolve*/(415);

        try {
          var weakModule = __webpack_require__(weakId);

          return resolve(weakModule);
        } catch (err) {}

        __webpack_require__.e/* require.ensure */(7).then((function (require) {
          try {
            var m = __webpack_require__(415);

            resolve(m);
          } catch (error) {
            reject(error);
          }
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      })

      // Add remove components based on props

    };return components;
  },
  render: function render(props, _ref) {
    var Hello1 = _ref.Hello1,
        Hello2 = _ref.Hello2;
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, _react2.default.createElement('h1', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, props.title), _react2.default.createElement(Hello1, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }), _react2.default.createElement(Hello2, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }));
  }
});

exports.default = function () {
  return _react2.default.createElement(HelloBundle, { title: 'Dynamic Bundle', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R5bmFtaWMuanMiXSwibmFtZXMiOlsiZHluYW1pYyIsIkR5bmFtaWNDb21wb25lbnQiLCJEeW5hbWljQ29tcG9uZW50V2l0aEN1c3RvbUxvYWRpbmciLCJsb2FkaW5nIiwiRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiIsInNzciIsIkhlbGxvQnVuZGxlIiwibW9kdWxlcyIsImNvbXBvbmVudHMiLCJIZWxsbzEiLCJIZWxsbzIiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSwrSkFBbUI7T0FBQTs7d0NBQUE7b0JBQUEsQUFBZTs7MkJBQWY7WUFBQTtLQUFBOzBGQUFBO21DQUFBLEFBQWU7O01BQWY7eUNBQUE7O21CQUFBO2lCQUFBOzt3Q0FBQTtRQUFBO3NCQUFBLEFBQWU7O2NBQWY7b0JBQUE7YUFBQTtBQUFBO0tBQUE7QUFBekIsRUFBeUI7O0FBRXpCLElBQU0sZ0xBQW9DO09BQUE7O3dDQUFBO29CQUFBLEFBQ2pDOzsyQkFEaUM7WUFBQTtLQUFBOzBGQUFBO21DQUFBLEFBQ2pDOztNQURpQzt5Q0FBQTs7bUJBQUE7aUJBQUE7O3dDQUFBO1FBQUE7c0JBQUEsQUFDakM7O2NBRGlDO29CQUFBO2FBQUE7QUFBQTtLQUFBOztXQUc3QixtQkFBQTsyQkFBTSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsS0FBQSxFQUFOLEFBQU07QUFIbkIsQUFBMEMsQUFFeEM7QUFBQSxBQUNFLENBSHNDOztBQU8xQyxJQUFNLHdLQUE0QjtPQUFBOzt3Q0FBQTtvQkFBQSxBQUFlOzsyQkFBZjtZQUFBO0tBQUE7MEZBQUE7bUNBQUEsQUFBZTs7TUFBZjt5Q0FBQTs7bUJBQUE7aUJBQUE7O3dDQUFBO1FBQUE7c0JBQUEsQUFBZTs7Y0FBZjtvQkFBQTthQUFBO0FBQUE7S0FBQTs7T0FBbEMsQUFBa0MsQUFBMkIsQUFDdEQ7QUFEc0QsQUFDM0QsQ0FEZ0M7O0FBSWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTTtXQUNLLHdCQUFTLEFBQ2hCO1FBQU07bUlBQ0o7YUFBQTs7OENBQUE7MEJBQUEsQUFBZTs7aUNBQWY7a0JBQUE7V0FBQTtnR0FBQTt5Q0FBQSxBQUFlOztZQUFmOytDQUFBOzt5QkFBQTt1QkFBQTs7OENBQUE7Y0FBQTs0QkFBQSxBQUFlOztvQkFBZjswQkFBQTttQkFBQTtBQUFBO1dBQUE7QUFEZ0IsQUFFaEI7bUlBQUE7YUFBQTs7OENBQUE7MEJBQUEsQUFBZTs7aUNBQWY7a0JBQUE7V0FBQTtnR0FBQTt5Q0FBQSxBQUFlOztZQUFmOytDQUFBOzt5QkFBQTt1QkFBQTs7OENBQUE7Y0FBQTs0QkFBQSxBQUFlOztvQkFBZjswQkFBQTttQkFBQTtBQUFBO1dBQUE7QUFHRjs7QUFMQSxBQUFrQjs7QUFBQSxBQUNoQixNQU1GLE9BQUEsQUFBTyxBQUNSO0FBVnlCLEFBVzFCO1VBQVEsZ0JBQUEsQUFBQyxhQUFEO1FBQUEsQUFBVSxjQUFWLEFBQVU7UUFBVixBQUFrQixjQUFsQixBQUFrQjsyQkFDeEIsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxhQURGLEFBQ0UsQUFDUyxBQUVULHNDQUFBLEFBQUM7O2tCQUFEO29CQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsc0NBQ0EsQUFBQzs7a0JBQUQ7b0JBTkksQUFDTixBQUtFO0FBQUE7QUFBQTtBQWpCTixBQUFvQixBQUFRLEFBcUI1QjtBQXJCNEIsQUFDMUIsQ0FEa0I7O2tCQXFCTCxZQUFBO3VDQUFNLEFBQUMsZUFBWSxPQUFiLEFBQW1CO2dCQUFuQjtrQkFBTixBQUFNO0FBQUE7R0FBQTtBQUFyQiIsImZpbGUiOiJkeW5hbWljLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2UvRG9jdW1lbnRzL25leHRfdHV0b3JpYWwyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/joe/Documents/next_tutorial2/pages/dynamic.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/joe/Documents/next_tutorial2/pages/dynamic.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dynamic")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4wMjAxYTUwMzJhODY4ZTI4Y2FjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZHluYW1pYy5qcz85YzkxZmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoaW1wb3J0KCcuL2hlbGxvJykpXG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoQ3VzdG9tTG9hZGluZyA9IGR5bmFtaWMoXG4gIGltcG9ydCgnLi9oZWxsbycpLFxuICB7XG4gICAgbG9hZGluZzogKCkgPT4gPHA+Li4uPC9wPlxuICB9XG4pXG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgPSBkeW5hbWljKGltcG9ydCgnLi9oZWxsbycpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+XG4vLyAgIDxkaXY+XG4vLyAgICAgey8qIDxIZWFkZXIgLz4gKi99XG4vLyAgICAgPER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgLz5cbi8vICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+SE9NRSBQQUdFIGlzIGhlcmUhPC9wPlxuLy8gICA8L2Rpdj5cblxuXG5jb25zdCBIZWxsb0J1bmRsZSA9IGR5bmFtaWMoe1xuICBtb2R1bGVzOiBwcm9wcyA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9e1xuICAgICAgSGVsbG8xOiBpbXBvcnQoJy4vaGVsbG8nKSxcbiAgICAgIEhlbGxvMjogaW1wb3J0KCcuL2hlbGxvJylcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVtb3ZlIGNvbXBvbmVudHMgYmFzZWQgb24gcHJvcHNcblxuICAgIHJldHVybiBjb21wb25lbnRzXG4gIH0sXG4gIHJlbmRlcjogKHByb3BzLCB7IEhlbGxvMSwgSGVsbG8yIH0pID0+XG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxIZWxsbzEgLz5cbiAgICAgIDxIZWxsbzIgLz5cbiAgICA8L2Rpdj5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IDxIZWxsb0J1bmRsZSB0aXRsZT1cIkR5bmFtaWMgQnVuZGxlXCIgLz5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2R5bmFtaWMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBTkE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBcEJBO0FBQ0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==