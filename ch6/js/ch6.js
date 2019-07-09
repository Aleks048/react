function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      counter: 0,
      w: 100
    };
  }

  handleResize() {
    //non-standard react event
    this.state.w = this.state.w == "100px" ? "200px" : "100px";
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  clickHandle(event) {
    this.setState({
      counter: this.state['counter'] == 0 ? 1 : 0
    });
    console.log(this, event);
  }

  clickHandleInCapture(event) {
    console.log("CapClickClack");
  }

  render() {
    return React.createElement("div", null, React.createElement(Butt, {
      style: {
        height: this.state.w
      },
      handler: this.clickHandle,
      init: this.state.counter
    }), React.createElement(Butt, {
      handler: this.clickHandle,
      init: this.state.counter + 1
    }));
  }

}

class Butt extends React.Component {
  render() {
    return React.createElement("button", _extends({
      onClick: this.props.handler
    }, this.props), this.props.init);
  }

}

ReactDOM.render(React.createElement(Content, null), document.getElementById("content"));