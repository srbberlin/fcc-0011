'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var In = function (_React$Component) {
  _inherits(In, _React$Component);

  function In(props) {
    _classCallCheck(this, In);

    var _this = _possibleConstructorReturn(this, (In.__proto__ || Object.getPrototypeOf(In)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(In, [{
    key: 'onChange',
    value: function onChange(e) {
      this.props.publish(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement(
          'h3',
          null,
          'Input goes here'
        ),
        React.createElement('textarea', {
          value: this.props.init,
          onChange: this.onChange
        })
      );
    }
  }]);

  return In;
}(React.Component);

var Out = function (_React$Component2) {
  _inherits(Out, _React$Component2);

  function Out() {
    _classCallCheck(this, Out);

    return _possibleConstructorReturn(this, (Out.__proto__ || Object.getPrototypeOf(Out)).apply(this, arguments));
  }

  _createClass(Out, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement(
          'h3',
          null,
          'The result is here'
        ),
        React.createElement('div', { id: 'OUT', dangerouslySetInnerHTML: { __html: marked(this.props.text) } })
      );
    }
  }]);

  return Out;
}(React.Component);

var Canvas = function (_React$Component3) {
  _inherits(Canvas, _React$Component3);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this3 = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    _this3.state = { typed: _this3.props.init };
    _this3.publish = _this3.publish.bind(_this3);
    return _this3;
  }

  _createClass(Canvas, [{
    key: 'publish',
    value: function publish(text) {
      this.setState({ typed: text });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'h1',
          null,
          'The Markdown Viewer'
        ),
        React.createElement(In, { publish: this.publish, init: this.state.typed }),
        React.createElement(Out, { text: this.state.typed })
      );
    }
  }]);

  return Canvas;
}(React.Component);

fetch('README.md').then(function (r) {
  return r.text();
}).then(function (v) {
  ReactDOM.render(React.createElement(Canvas, { init: v }), document.getElementById('root'));
}).catch(function (e) {
  console.log(e);
});