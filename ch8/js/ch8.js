class MyDate extends React.Component {
  render() {
    return React.createElement("div", null, this.props.currentDate);
  }

}

MyDate.defaultProps = {
  //using default properties if the prop currentDate not passed
  currentDate: Date()
};
MyDate.propTypes = {
  currentDate: PropTypes.number,
  locale: PropTypes.oneOf(["Ott", "Mont"])
};
MyDate.displayName = "hihaho"; //rendering children

class Content extends React.Component {
  render() {
    return React.createElement("div", null, this.props.children[0]);
  }

} //HOC


let HOC = Component => {
  class _HOC extends React.Component {
    render() {
      return React.createElement(Component, null);
    }

  }

  return _HOC;
};

const hocDate = HOC(MyDate);

class Componet extends React.Component {
  render() {
    return React.createElement("hocDate", null);
  }

}

ReactDOM.render(React.createElement("div", null, React.createElement(MyDate, null), React.createElement(Content, null, React.createElement("h1", null, "hi"), React.createElement("p", null, "rocks")), React.createElement(Componet, null)), document.getElementById("content"));