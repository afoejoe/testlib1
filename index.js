'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var scContext = require('sc-context');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Spinner */\n.preloader-preloader_root {\n  animation: preloader-preloader_spin 800ms linear infinite;\n  border-color: #525252;\n  border-left-color: #029a36;\n  border-radius: 48px;\n  border-style: solid;\n  border-width: 4px;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 3rem;\n  width: 3rem;\n}\n.preloader-preloader_default {\n  border-width: 4px;\n  height: 3rem;\n  width: 3rem;\n}\n.preloader-preloader_large {\n  border-radius: 64px;\n  border-width: 4px;\n  height: 4rem;\n  width: 4rem;\n}\n.preloader-preloader_medium {\n  border-radius: 24px;\n  border-width: 2px;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.preloader-preloader_small {\n  border-radius: 14px;\n  border-width: 2px;\n  height: 0.875rem;\n  width: 0.875rem;\n}\n@keyframes preloader-preloader_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/* Container */\n.preloader-preloader_container {\n  position: relative;\n}\n.preloader-preloader_loading {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 200;\n}\n.preloader-preloader_dark .preloader-preloader_loading {\n  background: rgba(0, 0, 0, 0.7);\n}\n.preloader-preloader_stretch {\n  height: 100%;\n}";
var styles = {"root":"preloader-preloader_root","spin":"preloader-preloader_spin","default":"preloader-preloader_default","large":"preloader-preloader_large","medium":"preloader-preloader_medium","small":"preloader-preloader_small","container":"preloader-preloader_container","loading":"preloader-preloader_loading","dark":"preloader-preloader_dark","stretch":"preloader-preloader_stretch"};
styleInject(css_248z);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Preloader = /*#__PURE__*/function (_React$Component) {
  _inherits__default["default"](Preloader, _React$Component);
  var _super = _createSuper$2(Preloader);
  function Preloader() {
    _classCallCheck__default["default"](this, Preloader);
    return _super.apply(this, arguments);
  }
  _createClass__default["default"](Preloader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        size = _this$props.size,
        className = _this$props.className,
        style = _this$props.style,
        extra = _this$props.extra;
      var theme = this.context.theme;
      var preloaderClasses = classNames__default["default"](styles.root, styles[size], _defineProperty__default["default"](_defineProperty__default["default"]({}, styles[theme], theme !== scContext.themes["default"]), className, className));
      return /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({
        className: preloaderClasses,
        style: style
      }, extra));
    }
  }]);
  return Preloader;
}(React__default["default"].Component);
Preloader.contextType = scContext.ThemeContext;
Preloader.defaultProps = {
  size: 'default'
};
Preloader.propTypes = {
  /**
   * Кастомный инлайн-стиль
   */
  style: PropTypes__default["default"].objectOf(PropTypes__default["default"].any),
  /**
   * Кастомное название стиля
   */
  className: PropTypes__default["default"].string,
  /**
   * Размер лоадера
   */
  size: PropTypes__default["default"].oneOf(['default', 'large', 'medium', 'small']),
  /**
   * Произвольные атрибуты
   */
  extra: PropTypes__default["default"].object // eslint-disable-line react/forbid-prop-types
};

var _excluded = ["isLoading", "preloaderSize", "className", "style", "extra"];
function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var withPreloader = (function (Component) {
  var withPreloader = /*#__PURE__*/function (_React$Component) {
    _inherits__default["default"](withPreloader, _React$Component);
    var _super = _createSuper$1(withPreloader);
    function withPreloader() {
      _classCallCheck__default["default"](this, withPreloader);
      return _super.apply(this, arguments);
    }
    _createClass__default["default"](withPreloader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          isLoading = _this$props.isLoading,
          preloaderSize = _this$props.preloaderSize,
          className = _this$props.className,
          style = _this$props.style,
          extra = _this$props.extra,
          other = _objectWithoutProperties__default["default"](_this$props, _excluded);
        var theme = this.context.theme;
        var containerClasses = classNames__default["default"](styles.container, _defineProperty__default["default"](_defineProperty__default["default"]({}, styles[theme], theme !== scContext.themes["default"]), className, className));
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: containerClasses,
          style: style
        }, /*#__PURE__*/React__default["default"].createElement(Component, _extends__default["default"]({}, extra, other)), isLoading && /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.loading
        }, /*#__PURE__*/React__default["default"].createElement(Preloader, {
          size: preloaderSize
        })));
      }
    }]);
    return withPreloader;
  }(React__default["default"].Component);
  withPreloader.contextType = scContext.ThemeContext;
  withPreloader.defaultProps = {
    preloaderSize: 'default',
    isLoading: false
  };
  withPreloader.propTypes = {
    /**
     * Кастомный инлайн-стиль
     */
    style: PropTypes__default["default"].objectOf(PropTypes__default["default"].any),
    /**
     * Кастомное название стиля
     */
    className: PropTypes__default["default"].string,
    /**
     * Отображать ли лоадер
     */
    isLoading: PropTypes__default["default"].bool,
    /**
     * Размер лоадера
     */
    preloaderSize: PropTypes__default["default"].oneOf(['default', 'large', 'medium', 'small']),
    /**
     * Произвольные атрибуты
     */
    extra: PropTypes__default["default"].object // eslint-disable-line react/forbid-prop-types
  };

  return withPreloader;
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Container = /*#__PURE__*/function (_React$Component) {
  _inherits__default["default"](Container, _React$Component);
  var _super = _createSuper(Container);
  function Container() {
    _classCallCheck__default["default"](this, Container);
    return _super.apply(this, arguments);
  }
  _createClass__default["default"](Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        isLoading = _this$props.isLoading,
        size = _this$props.size,
        children = _this$props.children,
        className = _this$props.className,
        style = _this$props.style,
        isStretch = _this$props.isStretch,
        extra = _this$props.extra;
      var theme = this.context.theme;
      var containerClasses = classNames__default["default"](styles.container, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, styles[theme], theme !== scContext.themes["default"]), className, className), styles.stretch, isStretch));
      return /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({
        className: containerClasses,
        style: style
      }, extra), children, isLoading && /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles.loading
      }, /*#__PURE__*/React__default["default"].createElement(Preloader, {
        size: size
      })));
    }
  }]);
  return Container;
}(React__default["default"].Component);
Container.contextType = scContext.ThemeContext;
Container.defaultProps = {
  size: 'default',
  isLoading: false
};
Container.propTypes = {
  /**
   * Кастомный инлайн-стиль
   */
  style: PropTypes__default["default"].objectOf(PropTypes__default["default"].any),
  /**
   * Кастомное название стиля
   */
  className: PropTypes__default["default"].string,
  /**
   * Отображать ли лоадер
   */
  isLoading: PropTypes__default["default"].bool,
  /**
   * Добавление стиля height: 100%
   */
  isStretch: PropTypes__default["default"].bool,
  /**
   * Размер лоадера
   */
  size: PropTypes__default["default"].oneOf(['default', 'large', 'medium', 'small']),
  /**
   * Произвольные атрибуты
   */
  extra: PropTypes__default["default"].object // eslint-disable-line react/forbid-prop-types
};

exports.PreloaderContainer = Container;
exports["default"] = Preloader;
exports.withPreloader = withPreloader;
//# sourceMappingURL=index.js.map
