import { Type } from "../../assets/TypesMap";

import LayoutContainer from "../Layout/LayoutContainer";

interface WeakProps {
  chosenTypes: Array<Type>;
}

export default function Weak({ chosenTypes }: WeakProps) {
  return (
    <>
      <LayoutContainer title="Vulnerable to">Content</LayoutContainer>
    </>
  );
}
