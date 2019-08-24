const {combineReducers} = require("redux")

const {reducer:movies} = require("./movies")//create a reducer object called movies from movies.js


module.expoorts = combineReducers({movies})