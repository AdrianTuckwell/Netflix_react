var React = require('react');
var MovieDetail = require('../components/MovieDetail.jsx');
var MovieSelector = require('../components/MovieSelector.jsx');
var MoviePoster = require('../components/MoviePoster.jsx');

var ActorContainer = React.createClass({
  getInitialState: function() {
    return { movies: [],
            focusMovie: null };
  },
  componentDidMount: function() {
    var url = "http://netflixroulette.net/api/api.php?actor=Jim%20Carrey";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({movies: data});
    }.bind(this);
    request.send();
  },
  render: function() {
    return(
      <div>
        <h2>Jim Carrey</h2>
        <MovieSelector
          movies={this.state.movies}
          selectMovie={this.setFocusMovie}
          />
          <MovieDetail movie={this.state.focusMovie}/>
          <MoviePoster movie={this.state.focusMovie}/>
      </div>
      );
  },
  setFocusMovie: function(movie) {
    this.setState({focusMovie: movie})
  } 
});

module.exports = ActorContainer;