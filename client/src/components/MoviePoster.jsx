var React = require('react');

var MoviePoster = function(props) {
  if (!props.movie) {
    return <h4></h4>
  };
  return(
    <img src={props.movie.poster}/>
    );
};

module.exports = MoviePoster;