class MyDate extends React.Component{
    render(){
        return<div>{this.props.currentDate}</div>
    }
}
MyDate.defaultProps={//using default properties if the prop currentDate not passed
    currentDate:Date()
}
MyDate.propTypes={
    currentDate:PropTypes.number,
    locale:PropTypes.oneOf(["Ott","Mont"])
}
MyDate.displayName = "hihaho"
//rendering children
class Content extends React.Component{
    render(){
        return <div>{this.props.children[0]}</div>
    }
}
//HOC
let HOC = (Component)=>{
    class _HOC extends React.Component{
        render(){return <Component/>}
    }
    return _HOC
}
const hocDate = HOC(MyDate)
class Componet extends React.Component{
    render(){
        return <hocDate/>
    }
}
ReactDOM.render(
    <div>
        <MyDate />
        <Content>
            <h1>hi</h1>
            <p>rocks</p>
        </Content>
        <Componet/>
    </div>,
    document.getElementById("content")
)