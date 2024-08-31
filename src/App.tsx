import { useState } from "react";

import Main from "./Components/Main/Main";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <section className="m-5">
          <h1 className="font-medium text-2xl">
            Pokemon Go Counters<sup>v2</sup>
          </h1>
        </section>
        <Main></Main>
        <div></div>
      </div>
    </>
  );
}

export default App;
