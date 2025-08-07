import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          UMYIDI Youth Hub
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-primary ${pathname === "/" ? "text-primary font-semibold" : ""}`}
            >
              Home
            </Link>
          </li>
          {/* Add more navigation links as you add more pages */}
          {/* <li>
            <Link to="/programs" className="hover:text-primary">Programs</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}