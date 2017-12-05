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
        <div id="OUT" dangerouslySetInnerHTML={{__html:marked(this.props.text)}} >
        </div>
      </div>
    );
  }
}

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.state = {typed: ""};
    this.publish = this.publish.bind(this);
  }
  publish(text) {
    this.setState({typed: text});
  }
  render() {
    return (
      <div className='row'>
        <h1>The Markdown Viewer</h1>
        <In publish={this.publish}/>
        <Out text={this.state.typed} />
      </div>
    );
  }
}

ReactDOM.render(
  <Canvas />,
  document.getElementById('root')
);
