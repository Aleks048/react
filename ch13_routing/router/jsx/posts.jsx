const React = require("react")
const {Link} = require("react-router")

module.exports = function Posts(props){
    // setTimeout(()=>{
    //     props.router.push("about")
    //     console.log("moving")
    // },10000)
    return <div> Hibla dubla posts
        <ol>a
            {props.route.posts.map(
                (post,index)=>
                  <li key={post.slug}>a  <Link to ={`/posts/${post.slug}`} >{post.title}</Link>
                  </li>           
            )}
        </ol>
    </div>
}