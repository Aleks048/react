const React = require("react")
const {render} = require("react-dom")
const {Provider} = require("react-flux")
const {createStore} = require("react-redux")
const reducers = require("./modules")
const routes = require("./routers")

module.exports = render(
    <Provider store={createStore(reducers)}>{/*applies reducers */}
        {routes}
    </Provider>
    ,document.getElementById("app")
)