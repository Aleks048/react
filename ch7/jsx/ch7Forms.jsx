class MyTextInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {title:"Mr."}
    }
    handleChange(event){
        this.setState({title:event.target.value})
    }
    onClickHandler(event){
        this.setState({title:"moma"})
    }
    render(){
        return <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}
            onClick = {this.onClickHandler.bind(this)}
        />
    }
}

class MyRadioForm extends React.Component{
    constructor(props){
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            radioGroup:{
                a:false,
                b:true,
                c:false
            }
        }
    }
    handleRadio(event){
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup:obj}) 
    }
    render() {
        return (
                <form>
                    <input type="radio" name="radioGroup"  value="a"  checked={this.state.radioGroup["a"]} onChange={this.handleRadio}/>
                    <input type="radio" name="radioGroup"  value="b"  checked={this.state.radioGroup["b"]} onChange={this.handleRadio}/>
                    <input type="radio" name="radioGroup"  value="c" checked={this.state.radioGroup["c"]} onChange={this.handleRadio}/>
                </form>    
        );
    }
}
class MyCheckBox extends React.Component{
    constructor(props){
        super(props)
        this.hangleChecked = this.hangleChecked.bind(this)
        this.state = {
            CheckBoxGroup:{
                a:false,
                b:true,
                c:false
            }
        }
    }
    hangleChecked(event){
        console.log(event.target.value)
        let obj = Object.assign(this.state.CheckBoxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({CheckBoxGroup:obj})
    }
    render() {
        return (
                <form>
                   <input type="checkbox" name="CheckBoxGroup"  value="a"  checked={this.state.CheckBoxGroup.a} onChange={this.hangleChecked}/>
                    <input type="checkbox" name="CheckBoxGroup"  value="b"  checked={this.state.CheckBoxGroup["b"]} onChange={this.hangleChecked}/>
                    <input type="checkbox" name="CheckBoxGroup"  value="c" checked={this.state.CheckBoxGroup["c"]} onChange={this.hangleChecked}/>
                </form>    
        );
    }
}
class MySelect extends React.Component{//references here
    constructor(props){
        super(props)
        this.state = {selectedValue:"a"}
    }
    handleSelection(event){
        console.log(event.target.value)
        this.setState({selectedValue:event.target.value})
        console.log(ReactDOM.findDOMNode(this.refs.optionA).value)//getting element by reference
    }
    render(){
        return<form>
                <input type="text" defaultValue="this is default"/>{/*using default value here*/}
                <select 
                    value = {this.state.selectedValue}
                    onChange = {this.handleSelection.bind(this)}
                >
                    <option ref = "optionA" value="a">a</option>
                    <option value="b">b</option>
                </select>
            </form>
    }
}


ReactDOM.render(
    <div>
    <MyRadioForm/>
    <MyCheckBox/>
    <MySelect/>
    </div>,
    document.getElementById("content")
)