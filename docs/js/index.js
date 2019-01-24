"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var In =
/*#__PURE__*/
function (_React$Component) {
  _inherits(In, _React$Component);

  function In(props) {
    var _this;

    _classCallCheck(this, In);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(In).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(In, [{
    key: "onChange",
    value: function onChange(e) {
      this.props.publish(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "col-sm-6"
      }, React.createElement("h3", null, "Input goes here"), React.createElement("textarea", {
        value: this.props.init,
        onChange: this.onChange
      }));
    }
  }]);

  return In;
}(React.Component);

var Out =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Out, _React$Component2);

  function Out() {
    _classCallCheck(this, Out);

    return _possibleConstructorReturn(this, _getPrototypeOf(Out).apply(this, arguments));
  }

  _createClass(Out, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "col-sm-6"
      }, React.createElement("h3", null, "The result is here"), React.createElement("div", {
        id: "OUT",
        dangerouslySetInnerHTML: {
          __html: marked(this.props.text)
        }
      }));
    }
  }]);

  return Out;
}(React.Component);

var Canvas =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Canvas, _React$Component3);

  function Canvas(props) {
    var _this2;

    _classCallCheck(this, Canvas);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, props));
    _this2.state = {
      typed: _this2.props.init
    };
    _this2.publish = _this2.publish.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(Canvas, [{
    key: "publish",
    value: function publish(text) {
      this.setState({
        typed: text
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "row"
      }, React.createElement("h1", null, "The Markdown Viewer"), React.createElement(In, {
        publish: this.publish,
        init: this.state.typed
      }), React.createElement(Out, {
        text: this.state.typed
      }));
    }
  }]);

  return Canvas;
}(React.Component);

fetch('README.md').then(function (r) {
  return r.text();
}).then(function (v) {
  ReactDOM.render(React.createElement(Canvas, {
    init: v
  }), document.getElementById('root'));
}).catch(function (e) {
  console.log(e);
});