interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-indigo-500 px-4 py-1 rounded-md my-3 disabled:bg-indigo-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
