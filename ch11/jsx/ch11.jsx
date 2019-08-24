class TimerWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            "timeLeft":null,
            "timer":null//holdt a reference to the timer object
            }
        this.startTimer = this.startTimer.bind(this)
    }
    startTimer(timeLeft){
        clearInterval(this.state.timer)//clearInterval is like setInterval for execution over time
        let timer = setInterval(()=>{//setINterval will run asynchronically and will be exec after the first return
            var timeLeft = this.state.timeLeft-1
            if (timeLeft==0) clearInterval(timer)
            this.setState({timeLeft:timeLeft})
            }
        ,1000)
        return this.setState({timer:timer,timeLeft:timeLeft})
    }
    render(){
        return <div className="row-fluid">
            <h2>Timerrrrr</h2>
            <div className= "btn-group" role="group">
                <Button time="5" startTimer={this.startTimer}/>
                <Button time="10" startTimer={this.startTimer}/>
                <Button time="15" startTimer={this.startTimer}/>
            </div>
            <Timer time={this.state.timeLeft}/>
            <audio id= "alarm" src="alarm.wav" preload="auto"></audio>
        </div>
    }
}
class Timer extends React.Component{
    render(){
        if (this.props.time==0){
            document.getElementById("alarm").play()
        }
        if (this.props.time==null || this.props.time==0){
            return <div/>
        }
        return <h1>Time left: {this.props.time}</h1>
    }
}
class Button extends React.Component{
    render(){
        return <button type="button" className="btn-default btn"
            // NOTE:  to pass the function with parameters we wrap it into a ()=>{}
            onClick = {()=>{this.props.startTimer(this.props.time)}}>
                {this.props.time} seconds
            </button>
    }
}

ReactDOM.render(
    <TimerWrapper/>,
    document.getElementById("content")
)