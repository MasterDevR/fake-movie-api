// import { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { movieStoreHandler } from "../../store/store";
// import classes from "./highlighted.module.css";

// const HighlightedMovie = () => {
//   const ctx = useContext(movieStoreHandler);
//   const activeMovieId = ctx.activeMovieId;

//   let movie = ctx.activeMovie;

//   const activeMovieHandler = (id) => {
//     ctx.addItem(movie, id);
//   };

//   let movies = movie.map((movie) => {
//     let title = movie.title;
//     let date = movie.release_date;
//     let poster = movie.backdrop_path;
//     let id = movie.id;

//     if (movie.name && movie.first_air_date) {
//       title = movie.name;
//       date = movie.first_air_date;
//     }

//     return (
//       <NavLink
//         key={id}
//         className={
//           id === activeMovieId ? classes.activeContainer : classes.imageWrapper
//         }
//         id={id}
//         to={`/browse/${id}/${id}/${title}/${date}`}
//         onClick={() => activeMovieHandler(id)}
//       >
//         <img
//           src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
//           alt={title}
//           className={id === activeMovieId ? classes.activeImage : "image"}
//           id={id}
//         />
//         <div className="movieInfo">
//           <span id="title">
//             <span id="titleHolder">Title: </span>
//             {title}
//           </span>
//           <span id="date">
//             <span id="titleHolder"> Date: </span>
//             {date}
//           </span>
//         </div>
//       </NavLink>
//     );
//   });

//   return (
//     <div className={`${classes.ActivebrowseWrapper} browseWrapper`}>
//       {movies}
//     </div>
//   );
// };

// export default HighlightedMovie;
