const React =require("react")
const connect = require("react-redux")

class Movies extends React.Component{
    render(){
        const {movies =[]}=this.props
        return(
            <div className = {styles.movies}>
                {movies.map((movie,index) =>(
                    <div key={index}>
                        {movie.title}
                    </div>
                    ))}
            </div>
        )
    }
} 
module.exports = connect(function(state){return state})(Movies)