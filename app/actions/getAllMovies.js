import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getAllMovies = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return [];
    }

    const listings = await prisma.movie.findMany({});
    return listings;
  } catch (error) {
    return [];
  }
};

export default getAllMovies;
