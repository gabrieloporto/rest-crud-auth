import { Link } from "react-router-dom";
import { ButtonLink } from "./ui/ButtonLink";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-zinc-700  my-3 flex justify-between py-5 px-10 rounded-lg mb-10">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <div className="flex flex-col justify-center items-center sm:flex-row gap-2">
            <li>
              <ButtonLink to="/add-task">Add Task</ButtonLink>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => logout()}
                className="bg-indigo-500 px-4 py-1 rounded-md my-3 disabled:bg-indigo-300"
              >
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
