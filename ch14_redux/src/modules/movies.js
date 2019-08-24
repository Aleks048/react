const {handleActions} = require("redux-actions")

const FETCH_MOVIES = "movies/FETCH_MOVIES"//simply the name for the action type
const FETCH_MOVIE = "movies/FETCH_MOVIE"

const initialState = {//initial state
    movies:[],
    movie:{}
}

module.exports = {//we return 3 functions
    fetchMoviesActionCreator: (movies)=>({
        type: FETCH_MOVIES,
        movies//the data that is ssent 
    }),
    fetchMovieActionCreator: (index)=>({
        type: FETCH_MOVIE,
        movie
    }),
    reducer: handleActions({
        [FETCH_MOVIES]: (state,action)=>({...state,all:action.movies}),
        [FETCH_MOVIE]: (state,action)=>({...state,current:state.all[action.index-1]}),
    }
    ,initialState)
}