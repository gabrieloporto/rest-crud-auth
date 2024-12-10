interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-xs block my-1 text-slate-300">
      {children}
    </label>
  );
}
