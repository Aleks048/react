class ClockContent extends React.Component {
  constructor(props) {
    super(props);
    this.launchClockWithBind();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  launchClockWithBind() {
    setInterval(function () {
      console.log("update time");
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }.bind(this), 1000);
  }

  render() {
    return React.createElement("span", null, this.state.currentTime);
  }

} //3 ways to write stateless components


class Clock extends React.Component {
  render() {
    return React.createElement("h1", this.props, React.createElement(ClockContent, null));
  }

}

const C1 = function (props) {
  return React.createElement("h1", props, React.createElement(ClockContent, null));
};

const C2 = props => {
  return React.createElement("h1", props, React.createElement(ClockContent, null));
}; //render


ReactDOM.render(React.createElement(Clock, {
  style: {
    border: "2px solid blue"
  }
}), //passing the properties
document.getElementById("clock"));