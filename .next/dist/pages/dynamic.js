'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/next_tutorial2/pages/dynamic.js?entry';


var DynamicComponent = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('./hello');

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('./hello');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('./hello');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
}));

var DynamicComponentWithCustomLoading = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('./hello');

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('./hello');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('./hello');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
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

var DynamicComponentWithNoSSR = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('./hello');

    m.__webpackChunkName = 'pages_hello_aac1c685e273f8c40a5304a66b6095b3.js';
    resolve(m);
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('./hello');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('./hello');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/pages_hello_aac1c685e273f8c40a5304a66b6095b3.js');
}), {
  ssr: false
});

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(DynamicComponentWithNoSSR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('p', { style: { color: 'white' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'HOME PAGE is here!'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R5bmFtaWMuanMiXSwibmFtZXMiOlsiZHluYW1pYyIsIkR5bmFtaWNDb21wb25lbnQiLCJEeW5hbWljQ29tcG9uZW50V2l0aEN1c3RvbUxvYWRpbmciLCJsb2FkaW5nIiwiRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiIsInNzciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSwrSkFBbUI7T0FBQTs7d0NBQUE7b0JBQUEsQUFBZTs7MkJBQWY7WUFBQTtLQUFBOzBGQUFBO21DQUFBLEFBQWU7O01BQWY7eUNBQUE7O21CQUFBO2lCQUFBOzt3Q0FBQTtRQUFBO3NCQUFBLEFBQWU7O2NBQWY7b0JBQUE7YUFBQTtBQUFBO0tBQUE7QUFBekIsRUFBeUI7O0FBRXpCLElBQU0sZ0xBQW9DO09BQUE7O3dDQUFBO29CQUFBLEFBQ2pDOzsyQkFEaUM7WUFBQTtLQUFBOzBGQUFBO21DQUFBLEFBQ2pDOztNQURpQzt5Q0FBQTs7bUJBQUE7aUJBQUE7O3dDQUFBO1FBQUE7c0JBQUEsQUFDakM7O2NBRGlDO29CQUFBO2FBQUE7QUFBQTtLQUFBOztXQUc3QixtQkFBQTsyQkFBTSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsS0FBQSxFQUFOLEFBQU07QUFIbkIsQUFBMEMsQUFFeEM7QUFBQSxBQUNFLENBSHNDOztBQU8xQyxJQUFNLHdLQUE0QjtPQUFBOzt3Q0FBQTtvQkFBQSxBQUFlOzsyQkFBZjtZQUFBO0tBQUE7MEZBQUE7bUNBQUEsQUFBZTs7TUFBZjt5Q0FBQTs7bUJBQUE7aUJBQUE7O3dDQUFBO1FBQUE7c0JBQUEsQUFBZTs7Y0FBZjtvQkFBQTthQUFBO0FBQUE7S0FBQTs7T0FBbEMsQUFBa0MsQUFBMkIsQUFDdEQsQUFHUDtBQUo2RCxBQUMzRCxDQURnQzs7a0JBSW5CLFlBQUE7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFFRTtBQUZGO0FBQUEsR0FBQSxnQ0FFRSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUEsT0FBRyxPQUFPLEVBQUMsT0FBWCxBQUFVLEFBQVE7Z0JBQWxCO2tCQUFBO0FBQUE7S0FKVyxBQUNiLEFBR0U7QUFKSiIsImZpbGUiOiJkeW5hbWljLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2UvRG9jdW1lbnRzL25leHRfdHV0b3JpYWwyIn0=