class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
    this.toogle = this.toogle.bind(this);
  }

  toogle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }

  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) + 30
    };
    return React.createElement("div", {
      style: {
        display: 'inline'
      }
    }, React.createElement("span", {
      style: {
        color: 'blue'
      },
      onMouseOver: this.toogle,
      onMouseOut: this.toogle
    }, this.props.children), React.createElement("div", {
      className: "tooltip bottom",
      style: style,
      role: "tooltip"
    }, React.createElement("div", {
      className: "tooltip-arrow"
    }), React.createElement("div", {
      className: "tooltip-inner"
    }, this.props.text)));
  }

}

ReactDOM.render(React.createElement("div", null, React.createElement(Tooltip, {
  text: "i was hidden in the dark for the eternity and now I see the light"
}, "Most of the things in life are hidden")), document.getElementById("t"));