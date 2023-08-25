import getCurrentUser from "./actions/getCurrentUser";
import Container from "./components/Container";
import Navbar from "./components/navbar/Navbar";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <Navbar currentUser={currentUser} />
      <img src="/images/logo.png" alt="logo" className="h-40" />
    </Container>
  );
}
