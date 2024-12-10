import { forwardRef } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref, rows = 2) => (
    <textarea
      {...props}
      ref={ref}
      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
      rows={rows}
    />
  )
);
