'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _propTypes = require('prop-types');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement('div', props, [this.props.children, _react2.default.createElement('div', { className: triggersClass, key: 'trigger' }, [_react2.default.createElement('div', { className: expandClass, ref: 'expand', key: 'expand' }, _react2.default.createElement('div', { ref: 'expandChild' })), _react2.default.createElement('div', { className: contractClass, ref: 'contract', key: 'contract' })]), embedCss ? _react2.default.createElement('style', {
      key: 'embededCss',
      dangerouslySetInnerHTML: {
        __html: '.resize-triggers { visibility: hidden; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }'
      }
    }) : null]);
  };

  return ComponentResizableComponent;
}(_react.PureComponent), _class.defaultProps = {
  triggersClass: 'resize-triggers',
  expandClass: 'expand-trigger',
  contractClass: 'contract-trigger',
  embedCss: true
}, _temp2);
ComponentResizableComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  triggersClass: _propTypes.PropTypes.string,
  expandClass: _propTypes.PropTypes.string,
  contractClass: _propTypes.PropTypes.string,
  embedCss: _propTypes.PropTypes.bool,
  onResize: _propTypes.PropTypes.func.isRequired
} : {};
exports.default = ComponentResizableComponent;
module.exports = exports['default'];