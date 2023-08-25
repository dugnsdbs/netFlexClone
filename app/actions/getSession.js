import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  const result = await getServerSession(authOptions);
  return result;
}
