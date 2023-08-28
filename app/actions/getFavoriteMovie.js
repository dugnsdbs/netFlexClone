import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getFavoriteMovie = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favoriteMovies = await prisma.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });
    return favoriteMovies;
  } catch (error) {
    return null;
  }
};

export default getFavoriteMovie;
