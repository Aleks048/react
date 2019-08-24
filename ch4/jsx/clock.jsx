class ClockContent extends React.Component{
    constructor(props){
        super(props)
        this.launchClockWithBind()
        this.state = {currentTime: (new Date()).toLocaleString()}
    }
    launchClock(){
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString()
                })
        }, 1000)
    }
    launchClockWithBind(){
        setInterval(
        function(){
            console.log("update time")
            this.setState ({
                currentTime: (new Date()).toLocaleString()
            })
        }.bind(this),
        1000)
    }
    render(){
        return <span>{this.state.currentTime}</span>
    }
}

//3 ways to write stateless components
class Clock extends React.Component{
    render(){
        return <h1 {...this.props}><ClockContent/></h1>
    }
}
const C1 = function(props){
    return <h1 {...props}><ClockContent/></h1>
}
const C2 = (props)=>{//recomended approach
    return (
        <h1 
            {...props}><ClockContent/>
        </h1>
        )
}


//render
ReactDOM.render(
    <Clock style = {{border : "2px solid blue"}}/>,//passing the properties
    document.getElementById("clock")
)
