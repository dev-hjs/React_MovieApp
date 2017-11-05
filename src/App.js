import React, { Component } from 'react';
import './App.css';
import Movie from './Moive';

/*
const movieTitles = [
  "Metrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]
const movieImages = [
  "http://movie.phinf.naver.net/20170919_62/1505782593457htVeC_JPEG/movie_image.jpg",
  "http://movie.phinf.naver.net/20171102_198/1509590346814JRzwy_JPEG/movie_image.jpg",
  "http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg",
  "http://movie.phinf.naver.net/20171019_287/1508374945577O4m9z_JPEG/movie_image.jpg"
]
*/
/*
const movies = [
  {
    title: "Metrix",
    poster: "http://movie.phinf.naver.net/20170919_62/1505782593457htVeC_JPEG/movie_image.jpg"
  },
   {
    title: "Full Metal Jacket",
    poster: "http://movie.phinf.naver.net/20171102_198/1509590346814JRzwy_JPEG/movie_image.jpg"
  },
    {
    title: "Oldboy",
    poster: "http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg"
  },
   {
    title: "Star Wars",
    poster: "http://movie.phinf.naver.net/20171019_287/1508374945577O4m9z_JPEG/movie_image.jpg"
  }  
]
*/
/*
class App extends Component { 
  render() {
    return (
       <div className="App">

        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
 
      </div>
    );
  }
}
*/
class App extends Component {
  state ={ 
   // greeting :'hello'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "Metrix",
            poster: "http://movie.phinf.naver.net/20170919_62/1505782593457htVeC_JPEG/movie_image.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "http://movie.phinf.naver.net/20171102_198/1509590346814JRzwy_JPEG/movie_image.jpg"
          },
            {
            title: "Oldboy",
            poster: "http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg"
          },
          {
            title: "Star Wars",
            poster: "http://movie.phinf.naver.net/20171019_287/1508374945577O4m9z_JPEG/movie_image.jpg"
          }  
        ]
      }) 
    }, 1500)
  }

  _renderMovies = () => {
     const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
     })
     return movies
   }



  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}

      </div>
    );
  }
}

export default App;
