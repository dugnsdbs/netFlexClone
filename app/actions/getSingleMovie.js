import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getSingleMovie = async (params) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return [];
    }
    console.log(params);
    const { watchId } = params.params;

    if (!watchId || typeof watchId !== "string") {
      throw new Error("Invalid ID");
    }

    const movie = await prisma.movie.findUnique({
      where: {
        id: watchId,
      },
    });
    return movie;
  } catch (error) {
    return [];
  }
};

export default getSingleMovie;
