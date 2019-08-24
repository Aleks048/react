const React = require("react")

module.exports = function Post(props){
    let post  = props.route.posts.find(element=>element.slug==props.params.id)
    return <p>{post.text}</p>
}