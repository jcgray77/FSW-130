import React, { Component } from 'react';

import './App.css';
import { MovieContextConsumer } from './components/movieContext'
import Header from './components/Header'


class App extends Component {
 

  state = {
    movie: '',
    movieList: []
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  eventListUpdate = (event) => {
    event.preventDefault()
    this.setState({
      movieList: this.state.movieList.concat(this.state.movie),
      movie: ''
    })
    console.log(this.state.movieList)
  }

  

  render(props) {
    // let movieMap = moviesArray.map(arr => {
    //   return `${arr.releaseYear}`
    // })
    return (
      <div className="center">
        <Header></Header>
        <MovieContextConsumer>
          {({ movieName, nextMovie }) => (
            
            <div>
              {/* {onClick(event) {
    this.eventListUpdate();
    nextMovie(this.state.movie);
  }} */}
              {/* <p>{(movieName === '' || movieName === " " ? "Nothing is playing": `Current movie playing is ${movieName}`)}</p> */}
              <input
                type="text"
                name="movie"
                placeholder="movieName"
                value={this.state.movie}
                onChange={this.handleChange}
              />
              {/* <h1>{this.state.movie}</h1> */}
              <br />
              
              <button className="buttons" onClick={(this.eventListUpdate)}
              >Submit</button>
              
              {/* This state could be used to update current featured movies(It's not a bug it's a feature) */}
              <button className="buttons" onClick={() => nextMovie(this.state.movie)}>update</button>
              <br />
             
              {/* <MovieItems moviesCombined={this.state.movieList} /> */}
              <ol>
            {this.state.movieList.map(movieCombine => <li key={movieCombine}>{movieCombine}</li>)}
        </ol>
            </div>
          )}
        </MovieContextConsumer>

      
      </div>
    );
  }
}

export default App;