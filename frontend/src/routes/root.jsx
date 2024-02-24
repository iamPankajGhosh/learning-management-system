import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export default function Root() {
  return (
    <>
      <Header />
      <hr />
      <main className="grow py-10">
        <Outlet />
      </main>
      <hr />
      <Footer />
    </>
  );
}
