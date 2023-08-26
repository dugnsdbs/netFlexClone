import getCurrentUser from "./actions/getCurrentUser";
import getMovie from "./actions/getMovie";

import Container from "./components/Container";
import Navbar from "./components/navbar/Navbar";
import Billboard from "./components/Billboard";
import getAllMovies from "./actions/getAllMovies";
import MovieList from "./components/MovieList";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const movie = await getMovie();
  const allMovies = await getAllMovies();

  return (
    <Container>
      <Navbar currentUser={currentUser} />
      <Billboard movie={movie} allMovies={allMovies} />
      <div className="pb-40">
        <MovieList data={allMovies} title="Trending Now" />
      </div>

      {!currentUser && (
        <div
          className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat
          bg-center be-fixed bg-cover"
        ></div>
      )}
    </Container>
  );
}
+6;
