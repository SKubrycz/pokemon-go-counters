import { Type } from "../../assets/TypesMap";

import LayoutContainer from "../Layout/LayoutContainer";

interface StrongProps {
  strong: Array<Type>;
}

export default function Strong({ strong }: StrongProps) {
  return (
    <>
      <LayoutContainer title="Strong against">
        {strong.map((type, i) => {
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
