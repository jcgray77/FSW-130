//action Creators

module.exports.addMovie = function addMovie(title) {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

module.exports.removeMovie = function removeMovie(title) {
    return {
        type: "REMOVE_MOVIE",
        payload: title
    }
}

module.exports.allMovie = function allMovies() {
    return {
        type: "ALL_MOVIES"
    }
}

//reducers

const initalState = ["Lord of the Rings", "Zombie Land", "GroundHog's Day"]

module.exports.moviesReducer = function moviesReducer(movies = initalState, action) {
    switch (action.type) {
        case "ADD_MOVIE": 
            return [...movies, action.payload]
        
        case "REMOVE_MOVIE": 
            const updatedArr = movies.filter(title => title.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr

        
        case "ALL_MOVIES": {
            return movies
        }

        default:
            return movies
    }
}