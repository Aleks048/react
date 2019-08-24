class Menu2 extends React.Component{
    render(){
        let menus = ['a','b','c','d']
        return <div>
                    
                    {menus.map((i,v)=>{
                        return <div key={i}><Link label={v}/></div>
                    })
                    }
                </div>
    }
}
class Link2 extends React.Component{
    render(){
        const url='./'+this.props.label.toLowerCase().trim().replace(' ', '-')
        return <div>
                    <a href={url}>this.props.label</a><br/>
                </div>
    }
}
ReactDOM.render(
    <Menu/>,
    document.getElementById("menu2")
)
