import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
  />
));
