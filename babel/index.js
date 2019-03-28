class In extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.publish(e.target.value);
  }
  render() {
    return (
      <div className='col-sm-6'>
        <h3>Input goes here</h3>
        <textarea
          id="editor"
          value={this.props.init}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

class Out extends React.Component {
  render() {
    return (
      <div className='col-sm-6'>
        <h3>The result is here</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.text)}} >
        </div>
      </div>
    );
  }
}

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.state = {typed: this.props.init};
    this.publish = this.publish.bind(this);
  }
  publish(text) {
    this.setState({typed: text});
  }
  render() {
    return (
      <div className='row'>
        <h1>The Markdown Viewer</h1>
        <In publish={this.publish} init={this.state.typed}/>
        <Out text={this.state.typed} />
      </div>
    );
  }
}

fetch('README.md')
  .then(function(r) {
    return r.text()
  })
  .then(function(v) {
    ReactDOM.render(
      <Canvas init={v} />,
      document.getElementById('root')
    );
  })
  .catch(function (e) {
    console.log(e)
  })
