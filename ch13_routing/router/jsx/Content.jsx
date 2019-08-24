const React = require("react")
const {Link} = require("react-router")
const PropTypes = require("prop-types")

class Content extends React.Component{
    render(){
        return <div>
                <h1>I am a label</h1>     
                <div className = "navbar navbar-default">
                    <ul className = "nav nav-pills navbar-nav">
                        <li className = {(this.context.router.isActive('/about'))? "active":""}>
                        <Link to="/about" activeClassName="active">
                            about
                        </Link>
                        </li>
                        <li className = {(this.context.router.isActive('/posts'))? "active":""}>
                        <Link to="/posts" activeClassName="active">
                            Blog
                        </Link>
                        </li>

                    </ul>
                </div>
                {this.props.children}   
            </div>
        
    }
}

Content.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

module.exports = Content