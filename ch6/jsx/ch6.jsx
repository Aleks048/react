class Content extends React.Component{
    constructor(props){
        super(props)
        this.clickHandle=this.clickHandle.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.state = {counter:0,w:100}
    }
    handleResize(){//non-standard react event
        this.state.w = (this.state.w=="100px")?"200px":"100px";  
    }
    componentDidMount(){
        window.addEventListener("resize",this.handleResize)
    }
    componentWillUnmount(){
        window.removeEventListener("resize",this.handleResize)
    }
    clickHandle(event){
        this.setState({counter:(this.state['counter']==0)?1:0})
        console.log(this,event)
    }
    clickHandleInCapture(event){
        console.log("CapClickClack")
    }
    render(){
        return<div>
                <Butt style={{height:this.state.w}} handler={this.clickHandle} init = {this.state.counter}/>
                <Butt handler={this.clickHandle} init = {this.state.counter+1}/>
                </div>
    }
}
class Butt extends React.Component{
    render(){
        return (
            <button onClick={this.props.handler} {...this.props}>{this.props.init}</button>   
        )
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
)