import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { without } from "lodash";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req, params) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }
    const { movieId } = params;

    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds.push(movieId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(req, params) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { movieId } = params;

    if (!movieId || typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds = favoriteIds.filter((id) => id !== movieId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
