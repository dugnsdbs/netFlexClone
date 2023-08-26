import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getMovie = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return [];
    }

    const movieCount = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    return randomMovie[0];
  } catch (error) {
    return null;
  }
};

export default getMovie;

//  const listings = await prisma.listing.findMany({
//    where: query,
//    orderBy: {
//      createdAt: "desc",
//    },
//  });
