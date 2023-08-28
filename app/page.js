// import getCurrentUser from "./actions/getCurrentUser";
// import getMovie from "./actions/getMovie";
// import getAllMovies from "./actions/getAllMovies";
// import getFavoriteMovie from "./actions/getFavoriteMovie";

// import Container from "./components/Container";
// // import Navbar from "./components/navbar/Navbar";
// // import Billboard from "./components/Billboard";
// // import MovieList from "./components/MovieList";
// // import InfoModal from "./components/InfoModal";

// export default async function Home() {
//   const currentuser = await getCurrentUser();
//   const movie = await getMovie();
//   const allMovies = await getAllMovies();
//   const favoriteMovie = await getFavoriteMovie();

//   return (
//     <Container>
//       {!currentuser && (
//         <div
//           className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat
//           bg-center be-fixed bg-cover"
//         ></div>
//       )}
//     </Container>
//   );
// }

import getCurrentUser from "./actions/getCurrentUser";
import getMovie from "./actions/getMovie";

import Container from "./components/Container";
import Navbar from "./components/navbar/Navbar";
import Billboard from "./components/Billboard";
import getAllMovies from "./actions/getAllMovies";
import MovieList from "./components/MovieList";
import getFavoriteMovie from "./actions/getFavoriteMovie";
import InfoModal from "./components/InfoModal";
import getSingleMovie from "./actions/getSingleMovie";

export default async function Home() {
  const currentuser = await getCurrentUser();
  const movie = await getMovie();
  const allMovies = await getAllMovies();
  const favoriteMovie = await getFavoriteMovie();

  return (
    <Container>
      <Navbar currentuser={currentuser} />
      <Billboard movie={movie} allMovies={allMovies} />
      <InfoModal movie={allMovies} currentuser={currentuser} />

      <div className="pb-40">
        <MovieList
          data={allMovies}
          title="Trending Now"
          currentuser={currentuser}
        />
        <MovieList
          data={favoriteMovie}
          title="My List"
          currentuser={currentuser}
        />
      </div>
      {!currentuser && (
        <div
          className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat
          bg-center be-fixed bg-cover"
        ></div>
      )}
    </Container>
  );
}
