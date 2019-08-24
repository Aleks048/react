class Content extends React.Component {
  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  render() {
    return React.createElement("div", null);
  }

}

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    //fetching the data from server
    fetch(this.props["url-data"]).then(response => {
      return response.json();
    }).then(users => this.setState({
      users: users
    }));
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h1", null, "List of users", this.state.users.map(user => React.createElement("p", {
      key: user.id
    }, user.id))));
  }

}

ReactDOM.render(React.createElement(Users, {
  "url-data": "http://localhost/myReact/ch5/users.json"
}), document.getElementById("content"));