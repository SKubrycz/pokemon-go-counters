import { useState } from "react";

import MainWindow from "../Main/MainWindow";
import Weak from "../Weak/Weak";
import Strong from "../Strong/Strong";

export default function Main() {
  return (
    <>
      <section className="m-10 grid grid-cols-3">
        <Weak></Weak>
        <MainWindow></MainWindow>
        <Strong></Strong>
      </section>
    </>
  );
}
