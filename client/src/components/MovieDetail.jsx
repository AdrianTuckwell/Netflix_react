var React = require('react');

var MovieDetail = function(props) {
  if (!props.movie) {
    return <h4>No Movie Selected</h4>
  };
  return(
    <div className='movie-detail'>
      <h3>{props.movie.show_title}</h3>
      <h3>{props.movie.release_year}</h3>
      <p>{props.movie.summary}</p>
    </div>
    );
};

module.exports = MovieDetail;