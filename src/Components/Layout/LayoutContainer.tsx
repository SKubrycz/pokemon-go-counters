import { ReactNode } from "react";

interface LayoutContainerProps {
  children: ReactNode;
  title?: string;
}

export default function LayoutContainer({
  children,
  title,
}: LayoutContainerProps) {
  return (
    <aside className="p-5 bg-sky-500 bg-opacity-75">
      {title && title !== "" ? (
        <h3 className="m-1 p-2 text-lg">{title}</h3>
      ) : undefined}
      <section className="min-h-24 p-5 flex flex-wrap justify-center bg-sky-600 rounded-md shadow-md transition-shadow hover:shadow-xl">
        {children}
      </section>
    </aside>
  );
}
