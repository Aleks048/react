class Example extends React.Component {
  cofirmLeave(e) {
    let confMes = "You sure, bro?";
    e.returnValue = confMes;
    return confMes;
  }

  componentDidMount() {
    console.log("mounted");
    window.addEventListener("beforeunload", this.cofirmLeave);
  }

  componentWillUnmount() {
    console.log("before unmounting");
    window.removeEventListener("beforeunload", this.cofirmLeave);
  }

  render() {
    return React.createElement("span", null, "text will be here ", this.props.secondsLeft);
  }

}

let sec = 5;
let interv = setInterval(() => {
  if (sec == 0) {
    ReactDOM.render(React.createElement("span", null, "removed after", sec), document.getElementById("example"));
    clearInterval(interv);
  } else {
    ReactDOM.render(React.createElement(Example, {
      secondsLeft: sec
    }), document.getElementById("example"));
  }

  sec--;
}, 1000);