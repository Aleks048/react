class Time extends React.Component{
    constructor(props){
        super(props)
        this.startClock()
        this.state = {currentTime: (new Date).toLocaleTimeString()}
    }

    startClock(){
        setInterval(()=>{
            this.setState(
                {
                    currentTime: (new Date).toLocaleTimeString()
                }
            )
        },1000)
    }

    render(){
        return <span style={{border: '1px blue solid'}}>{this.state.currentTime}</span>
    }
}

ReactDOM.render(
    <Time/>,
    document.getElementById("content")
)