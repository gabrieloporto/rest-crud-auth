import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ to, children }: ButtonLinkProps) => (
  <Link to={to} className="bg-indigo-500 px-4 py-1 rounded-md">
    {children}
  </Link>
);
