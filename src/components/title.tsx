import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl text-slate-800 text-pretty max-w-3xl">
      {props.children}
    </h1>
  );
}
