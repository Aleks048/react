class Tooltip extends React.Component{
    constructor(props){
        super(props)
        this.state={opacity:false}
        this.toogle = this.toogle.bind(this)
    }
    toogle(){
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top:tooltipNode.offsetTop,
            left:tooltipNode.offsetLeft
        })
    }
    render(){
        const style = {
            zIndex : (this.state.opacity) ? 1000: -1000,
            opacity : +this.state.opacity,
            top : (this.state.top || 0) + 20,
            left : (this.state.left || 0) +30
        }
        return <div style = {{display:'inline'}}>
                    <span style= {{color: 'blue'}}
                        onMouseOver={this.toogle}
                        onMouseOut = {this.toogle}>
                        {this.props.children}
                    </span>
               
                    <div className ="tooltip bottom" style = {style} role = "tooltip">
                        <div className = "tooltip-arrow"></div>
                        <div className = "tooltip-inner">
                            {this.props.text}
                        </div>
                    </div>
               </div>
    }
}
ReactDOM.render(
    <div>
        <Tooltip text="i was hidden in the dark for the eternity and now I see the light">
        Most of the things in life are hidden</Tooltip>
    </div>,
    document.getElementById("t")
)
