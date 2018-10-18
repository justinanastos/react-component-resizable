/*!
 * react-component-resizable v2.0.0 - https://github.com/nrako/react-component-resizable
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-component-resizable"] = factory(require("react"));
	else
		root["react-component-resizable"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(2);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ComponentResizableComponent = (_temp2 = _class = function (_PureComponent) {
  _inherits(ComponentResizableComponent, _PureComponent);

  function ComponentResizableComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, ComponentResizableComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.lastDimensions = {
      width: null,
      height: null
    }, _this.requestFrame = function (fn) {
      return (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
        return window.setTimeout(fn, 20);
      })(fn);
    }, _this.cancelFrame = function (id) {
      return (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
    }, _this.resetTriggers = function () {
      var contract = _this.refs.contract;
      var expandChild = _this.refs.expandChild;
      var expand = _this.refs.expand;

      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    }, _this.onScroll = function () {
      if (_this.r) _this.cancelFrame(_this.r);
      _this.r = _this.requestFrame(function () {
        var dimensions = this.getDimensions();

        if (this.haveDimensionsChanged(dimensions)) {
          this.lastDimensions = dimensions;
          this.props.onResize(dimensions);
        }
      }.bind(_this));
    }, _this.getDimensions = function () {
      var el = _this.refs.resizable;
      return {
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    }, _this.haveDimensionsChanged = function (dimensions) {
      return dimensions.width != _this.lastDimensions.width || dimensions.height != _this.lastDimensions.height;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ComponentResizableComponent.prototype.componentDidMount = function componentDidMount() {
    this.resetTriggers();
    this.initialResetTriggersTimeout = setTimeout(this.resetTriggers, 1000);
  };

  ComponentResizableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.initialResetTriggersTimeout);

    // Cancel pending animation frame rqeuest if one exists when we're
    // unmounting. If we don't, then the frame callback may be called after
    // `this.refs.resizable` has been removed from the dom, causing an error.
    // @see https://github.com/nrako/react-component-resizable/issues/17
    if (this.r) this.cancelFrame(this.r);
  };

  ComponentResizableComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    this.resetTriggers();
  };

  ComponentResizableComponent.prototype.render = function render() {
    var _props = this.props,
        triggersClass = _props.triggersClass,
        expandClass = _props.expandClass,
        contractClass = _props.contractClass,
        embedCss = _props.embedCss,
        onResize = _props.onResize,
        rest = _objectWithoutProperties(_props, ['triggersClass', 'expandClass', 'contractClass', 'embedCss', 'onResize']);

    var props = _extends({}, rest, { onScroll: this.onScroll, ref: 'resizable' });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', props, [this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: triggersClass, key: 'trigger' }, [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: expandClass, ref: 'expand', key: 'expand' }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { ref: 'expandChild' })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: contractClass, ref: 'contract', key: 'contract' })]), embedCss ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('style', {
      key: 'embededCss',
      dangerouslySetInnerHTML: {
        __html: '.resize-triggers { visibility: hidden; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }'
      }
    }) : null]);
  };

  return ComponentResizableComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]), _class.propTypes = {
  triggersClass: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  expandClass: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  contractClass: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  embedCss: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool,
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.isRequired
}, _class.defaultProps = {
  triggersClass: 'resize-triggers',
  expandClass: 'expand-trigger',
  contractClass: 'contract-trigger',
  embedCss: true
}, _temp2);


/* harmony default export */ __webpack_exports__["default"] = (ComponentResizableComponent);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ])["default"];
});