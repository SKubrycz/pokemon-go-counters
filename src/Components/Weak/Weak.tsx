import { Type } from "../../assets/TypesMap";

import LayoutContainer from "../Layout/LayoutContainer";

interface WeakProps {
  weak: Array<Type>;
}

export default function Weak({ weak }: WeakProps) {
  return (
    <>
      <LayoutContainer title="Vulnerable to">
        {weak.map((type, i) => {
          return (
            <img
              key={i}
              src={type.src}
              alt={type.alt}
              className="w-20 h-20 cursor-pointer"
            ></img>
          );
        })}
      </LayoutContainer>
    </>
  );
}
