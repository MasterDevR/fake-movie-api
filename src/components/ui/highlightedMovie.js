const HighlightedMovie = (props) => {
  const movie = props.item;

  console.log(movie);
  let movies = movie
    .filter((movie) => {
      return movie !== undefined;
    })
    .map((movie) => {
      let title = movie.title;
      let date = movie.release_date;
      let poster = movie.backdrop_path;
      let id = movie.id;
      if (movie.name && movie.first_air_date) {
        title = movie.name;
        date = movie.first_air_date;
      }
      return (
        <div key={id}>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
            alt={title}
          />
          <span>{title}</span>
          <span>{date}</span>
        </div>
      );
    });

  return <div>{movies}</div>;
};

export default HighlightedMovie;
