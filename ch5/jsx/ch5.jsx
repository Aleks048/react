class Content extends React.Component{
    componentWillMount(){
        console.log(ReactDOM.findDOMNode(this))
    }
    componentDidMount(){
        console.log(ReactDOM.findDOMNode(this))
    }
    render(){return <div></div>;}
}

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {users:[]}
    }
    componentDidMount(){//fetching the data from server
        fetch(this.props["url-data"])
            .then((response)=>{
                return response.json()                            
            })
            .then((users)=>this.setState({users:users}))
    }
    render(){
        return (
            <div className="container">
                <h1>List of users
                {this.state.users.map((user)=>
                    <p key={user.id}>{user.id}</p>
                )}
                </h1>
            </div>
        )
    }
}
ReactDOM.render(
    <Users url-data="http://localhost/myReact/ch5/users.json"/>,
    document.getElementById("content")
)