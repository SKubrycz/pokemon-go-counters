import { Type } from "../../assets/TypesMap";

import LayoutContainer from "../Layout/LayoutContainer";

interface StrongProps {
  chosenTypes: Array<Type>;
}

export default function Strong({ chosenTypes }: StrongProps) {
  return (
    <>
      <LayoutContainer title="Strong against">Content</LayoutContainer>
    </>
  );
}
