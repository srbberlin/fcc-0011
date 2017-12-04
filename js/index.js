'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var In = function (_React$Component) {
  _inherits(In, _React$Component);

  function In(props) {
    _classCallCheck(this, In);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  In.prototype.onChange = function onChange(e) {
    this.props.publish(e.target.value);
  };

  In.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'col-sm-6' },
      React.createElement(
        'h3',
        null,
        'Input goes here'
      ),
      React.createElement('textarea', {
        onChange: this.onChange
      })
    );
  };

  return In;
}(React.Component);

var Out = function (_React$Component2) {
  _inherits(Out, _React$Component2);

  function Out() {
    _classCallCheck(this, Out);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Out.prototype.render = function render() {
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
  };

  return Out;
}(React.Component);

var Canvas = function (_React$Component3) {
  _inherits(Canvas, _React$Component3);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.state = { typed: "" };
    _this3.publish = _this3.publish.bind(_this3);
    return _this3;
  }

  Canvas.prototype.publish = function publish(text) {
    this.setState({ typed: text });
  };

  Canvas.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'h1',
        null,
        'The Markdown Viewer'
      ),
      React.createElement(In, { publish: this.publish }),
      React.createElement(Out, { text: this.state.typed })
    );
  };

  return Canvas;
}(React.Component);

ReactDOM.render(React.createElement(Canvas, null), document.getElementById('root'));