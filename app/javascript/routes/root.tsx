import { Link, Outlet, ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <Link to="/">AskMeAnything</Link>
      </header>
      <nav>
        <Link to="/example">Example</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
