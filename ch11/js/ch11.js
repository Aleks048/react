class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "timeLeft": null,
      "timer": null //holdt a reference to the timer object

    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer); //clearInterval is like setInterval for execution over time

    let timer = setInterval(() => {
      //setINterval will run asynchronically and will be exec after the first return
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    return this.setState({
      timer: timer,
      timeLeft: timeLeft
    });
  }

  render() {
    return React.createElement("div", {
      className: "row-fluid"
    }, React.createElement("h2", null, "Timerrrrr"), React.createElement("div", {
      className: "btn-group",
      role: "group"
    }, React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), React.createElement(Timer, {
      time: this.state.timeLeft
    }), React.createElement("audio", {
      id: "alarm",
      src: "alarm.wav",
      preload: "auto"
    }));
  }

}

class Timer extends React.Component {
  render() {
    if (this.props.time == 0) {
      document.getElementById("alarm").play();
    }

    if (this.props.time == null || this.props.time == 0) {
      return React.createElement("div", null);
    }

    return React.createElement("h1", null, "Time left: ", this.props.time);
  }

}

class Button extends React.Component {
  render() {
    return React.createElement("button", {
      type: "button",
      className: "btn-default btn" // NOTE:  to pass the function with parameters we wrap it into a ()=>{}
      ,
      onClick: () => {
        this.props.startTimer(this.props.time);
      }
    }, this.props.time, " seconds");
  }

}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById("content"));