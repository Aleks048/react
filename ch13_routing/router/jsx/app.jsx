const React = require('react')
const ReactDOM = require ('react-dom')
const Content = require('./Content.jsx')

const About = require("./about.jsx")
const Posts = require("./posts.jsx")
const Post = require("./post.jsx")
const History = require("history")
const ReactRouter=require("react-router")
let {Router,Route,Link} = ReactRouter

const {withRouter} =require("react-router") 

const posts = require("../posts.js")



let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)
                                              ({queryKey:false})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path = "/about" component={About}/>
      <Route path = "/posts" component={Posts} posts = {posts}/>
      <Route path = "/posts/:id" component = {Post} posts = {posts}/>
    </Route>
  </Router>,
  document.getElementById('content')
)