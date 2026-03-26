import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-400">React App</h1>

          {/* Menu */}
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link to="/student" className="hover:text-blue-400 transition">
                Students
              </Link>
            </li>

            <li>
              <Link to="/product" className="hover:text-blue-400 transition">
                Products
              </Link>
            </li>

            <li>
              <Link to="/movie" className="hover:text-blue-400 transition">
                Movie
              </Link>
            </li>

            <li>
              <Link to="/dayfour" className="hover:text-blue-400 transition">
                Day4
              </Link>
            </li>

            <li>
              <Link to="/dayfive" className="hover:text-blue-400 transition">
                Day5
              </Link>
            </li>

            <li>
              <Link to="/daysix" className="hover:text-blue-400 transition">
                Day6
              </Link>
            </li>

            <li>
              <Link to="/dayseven" className="hover:text-blue-400 transition">
                Day7
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
