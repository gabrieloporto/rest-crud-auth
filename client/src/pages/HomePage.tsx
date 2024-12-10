import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-transparent flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">React Tasks</h1>
        <p className="text-md text-slate-400">
          Manage your daily tasks efficiently with React Tasks.
          <br />
          Organize your to-do list, track your progress, and stay productive
          with an intuitive and user-friendly interface.
          <br />
          Start simplifying your workflow today!
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Get Started
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
